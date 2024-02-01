import "./ProductItem.css";
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import { message } from "antd";
    


const ProductItem = ({ productItem }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const filteredCart = cartItems.find(
    (cartItem) => cartItem._id === productItem._id
      );

      const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;

  // İndirimli fiyatı hesaplama
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

    const handleAddToCart = () => {
      addToCart({
        ...productItem,
        price: discountedPrice,
      });
      message.success(`${productItem.name} SEPETİNİZE EKLENDİ!`);
    };
   return (
    <div className="product-item glide_slide glide_slide--active">
         <div className="product-image">
        <a href=" #">
        <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="₺" className="product-title">
          
          {productItem.name}

        </a>
        <ul className="product-star">
          <li> 
            <i ><StarIcon/></i>
          </li>
          <li>
            <i ><StarIcon/></i>
          </li>
          <li>
            <i ><StarIcon/></i>
          </li>
          <li>
            <i ><StarIcon/></i>
          </li>
          <li>
            <i ><StarBorderIcon/></i>
          </li>
        </ul>
        <div className="product-prices">
        <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
          <span className="old-price">{originalPrice.toFixed(2)}₺</span>
        </div>
        <span className="product-discount">-{productItem.price.discount}%</span>
                <div className="product-links">
                <button className="add-to-cart" onClick={handleAddToCart}>
            <i> <AddShoppingCartIcon /></i>
          </button>
          
          
          <a>
            <i><ShareIcon/></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  productItem: PropTypes.object,
  setCartItems: PropTypes.func,
};