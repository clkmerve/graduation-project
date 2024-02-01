import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { Spin, message } from "antd";
import { loadStripe } from "@stripe/stripe-js";

const CartTotals = () => {
  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const [showAddressInput, setShowAddressInput] = useState(false); // Yeni eklenen state
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const { cartItems } = useContext(CartContext);
  const stripePublicKey = `pk_test_51OYU9xKpiKwShdhdEHwV78gQ97lHv17AO6oL0CQw6L08zK8xv0V7NczdZkZyZE21CqCV74vHWTwyFxTYQq4GuzbQ002eTmOrs5`; // VITE_ önekini kaldırdık

  if (!stripePublicKey) {
    console.error("API_STRIPE_KEY is not defined in the .env file.");
    
  }

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const cartItemTotals = cartItems.map((item) => {
    const itemTotal = item.price * item.quantity;
    return itemTotal;
  });

  const subTotals = cartItemTotals.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  const cargoFee = 15;

  const cartTotals = fastCargoChecked
    ? (subTotals + cargoFee).toFixed(2)
    : subTotals.toFixed(2);

  const handlePayment = async () => {
     setLoading(true);
    if (!user) {
      return message.info("Ödeme yapabilmek için giriş yapmalısınız!");
    }
     // Adres kontrolü
     if (showAddressInput && !address.trim()) {
      message.error("Adres boş bırakılamaz.");
      setLoading(false);
      return;
    }
    const body = {
      products: cartItems,
      user: user,
      cargoFee: fastCargoChecked ? cargoFee : 0,
      address: showAddressInput ? address.trim() : null, // Adresi ekliyoruz
    };
    try {
      const stripe = await loadStripe(stripePublicKey);

      const res = await fetch(`http://localhost:5000/api/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        return message.error("Ödeme işlemi başarısız oldu.");
      }

      const session = await res.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2))
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-totals">
      <h2>Sepet Toplamı</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Toplam</th>
            <td>
              <span id="subtotal">{subTotals.toFixed(2)}₺</span>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <ul>
                <li>
                  <label>
                    Kapıda Ödeme: 15.00₺
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      checked={fastCargoChecked}
                      onChange={() => setFastCargoChecked(!fastCargoChecked)}
                    />
                  </label>
                </li>
                <li>
                  <a href=" #" onClick={() => setShowAddressInput(true)}>Adres Ekle  </a>
                  {showAddressInput && (
                    <input type="text" placeholder="Adresiniz"
                    value={address} onChange={(e) => setAddress(e.target.value)} />
                  )}
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Tutar</th>
            <td>
              <strong id="cart-total">{cartTotals}₺</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        
      <Spin spinning={loading}>
          <button className="btn btn-lg" onClick={handlePayment}>
            Ödemeye Geç
          </button>
        </Spin>
      </div>
    </div>
  );
};

export default CartTotals;
