import React, { useContext } from "react";
import PropTypes from "prop-types";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShareIcon from '@mui/icons-material/Share';
// import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import "./ProductItem.css";  

const SoğukItem = ({ soğukItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem._id === soğukItem._id
  );

  const originalPrice = soğukItem.price.current;
  const discountPercentage = soğukItem.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  return (
    <div className="product-item">
      <div className="product-image">
        <a href=" #">
          <img src={soğukItem.img[0]} alt="" className="img1" />
          <img src={soğukItem.img[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href=" #" className="product-title">
          {soğukItem.name}
        </a>
        {/* <ul className="product-star">
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <i><StarIcon/></i>
            </li>
          ))}
        </ul> */}
        <div className="product-prices">
          <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
          <span className="old-price">{originalPrice.toFixed(2)}₺</span>
        </div>
        <span className="product-discount">-{soğukItem.price.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={() =>
              addToCart({
                ...soğukItem,
                price: discountedPrice,
              })
            }
            disabled={filteredCart}
          >
            <i> <AddShoppingCartIcon/></i>
          </button>
          <button>
            <i><FavoriteIcon/></i>
          </button>
          <Link to={`soğuk/${soğukItem._id}`} className="product-link">
            <i><RemoveRedEyeIcon/></i>
          </Link>
          <a href=" #">
            <i><ShareIcon/></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SoğukItem;

SoğukItem.propTypes = {
  soğuktItem: PropTypes.object,
};
