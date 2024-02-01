import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartTable = () => {
const { cartItems } = useContext(CartContext);
const handleQuantityChange = (itemId, newQuantity) => {
  // CartContext'teki updateCartItemQuantity fonksiyonunu kullanarak güncelleme yapın
};
const handleSubmit = (e) => {
  e.preventDefault(); // Sayfanın yenilenmesini engelle
  
};
return (
  <form onSubmit={handleSubmit}>
  <table className="shop-table">
    <thead>
      <tr>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-name">Ürün</th>
        <th className="product-price">Fiyat</th>
        <th className="product-quantity">Adet</th>
        <th className="product-subtotal">Toplam</th>
      </tr>
    </thead>
    <tbody className="cart-wrapper">
      {cartItems.map((item) => (
        <CartItem cartItem={item} key={item._id} 
        handleQuantityChange={handleQuantityChange}/>
      ))}
    </tbody>
  </table>
</form>
);
};

export default CartTable;