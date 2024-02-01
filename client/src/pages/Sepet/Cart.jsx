import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./Cart.css";
import CartCoupon from "./CartCoupon";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import CartProgress from "./CartProgress";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <section className="cart-page">
      <div className="container">
      {cartItems.length > 0 ? (
          <div className="cart-page-wrapper">
            <form className="cart-form">
              {/* <CartProgress /> */}
              <div className="shop-table-wrapper">
                <CartTable />
                <CartCoupon />
              </div>
            </form>
            <div className="cart-collaterals">
              <CartTotals />
            </div>
          
          </div>
       ) : (
       <b> <h1>Sepette hiç ürün yok!</h1></b>
      )}
      </div>
    </section>
  );
};

export default Cart;