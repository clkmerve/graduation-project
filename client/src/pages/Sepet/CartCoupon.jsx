import { message } from "antd";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";

const CartCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const { cartItems, setCartItems } = useContext(CartContext);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [originalPrices, setOriginalPrices] = useState([]);

  const updateCart = () => {
    // Orijinal fiyatları kullanarak sepeti güncelle
    const updatedCartItems = cartItems.map((item, index) => {
      return { ...item, price: originalPrices[index] };
    });

    setCartItems(updatedCartItems);
  };


  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Boş değer girilimez.");
    }
    
    if (isCouponApplied) {
      return message.warning("Kupon daha önce kullanıldı.");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/coupons/code/${couponCode}`);

      if (!res.ok) {
        return message.warning("Girdiğiniz kupon kodu yanlış!");
      }

      const data = await res.json();
      const discountPercent = data.discountPercent;
      // Orijinal fiyatları kaydet
      if (originalPrices.length === 0) {
        const currentPrices = cartItems.map((item) => item.price);
        setOriginalPrices(currentPrices);
      }


      const updatedCartItems = cartItems.map((item) => {
        const updatePrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatePrice };
      });

      setCartItems(updatedCartItems);
      setIsCouponApplied(true);
      message.success(`${couponCode} kupon kodu başarıyla uygulandı.`);
    } catch (error) {
      console.log(error);
    }
  };
    return (
      <div className="actions-wrapper">
        <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Kupon Kodu"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyCoupon}>
          Kupon Ekle
        </button>
      </div>
      <div className="update-cart">
        
      </div>
      </div>
    );
  };
  
  export default CartCoupon;