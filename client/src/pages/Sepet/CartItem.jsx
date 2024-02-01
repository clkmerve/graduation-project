import ClearIcon from '@mui/icons-material/Clear';
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { message } from 'antd';

const CartItem = ({ cartItem }) => {
  const { removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const handleQuantityChange = (newQuantity) => {
    console.log("New Quantity:", newQuantity);
    if (typeof updateCartItemQuantity === 'function') {
      updateCartItemQuantity(cartItem._id, newQuantity);
    } else {
      console.error("updateCartItemQuantity is not a function");
    }
  };
  const handleRemoveFromCart = () => {
    removeFromCart(cartItem._id);
    // Sepetten çıkarıldı mesajını görüntüle
    message.success(`${cartItem.name} sepetinizden çıkarıldı.`);
  };
  // cartItem.price'ın sayı değeri olup olmadığını kontrol et
  const isValidPrice = typeof cartItem.price === 'number' && !isNaN(cartItem.price);
  const subtotal = isValidPrice ? cartItem.price * cartItem.quantity : 0;
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={handleRemoveFromCart}
        ><ClearIcon/></i>
      </td>
      <td>{cartItem.name}</td>

      {/* isValidPrice kontrolü ekleyerek sayı değeri olup olmadığını kontrol et */}
      <td>{isValidPrice ? cartItem.price.toFixed(2) : "N/A"}₺</td>
      <td className="product-quantity">
        <button onClick={() => handleQuantityChange(cartItem.quantity - 1)}>
          <RemoveIcon />
        </button>
        {cartItem.quantity}
        <button onClick={() => handleQuantityChange(cartItem.quantity + 1)}>
          <AddIcon />
        </button>
      </td>
      <td className="product-subtotal">{subtotal.toFixed(2)}₺</td>    
      </tr>
  );
};

export default CartItem;

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
