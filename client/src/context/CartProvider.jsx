import {createContext,useEffect, useState} from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();


const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    const existingItemIndex = cartItems.findIndex((item) => item._id === cartItem._id);

    if (existingItemIndex !== -1) {
      // Eğer ürün zaten sepette varsa miktarını artır
      const updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + (cartItem.quantity || 1) }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Eğer ürün sepette yoksa yeni bir öğe olarak ekle
      setCartItems((prevCart) => [
        ...prevCart,
        {
          ...cartItem,
          quantity: cartItem.quantity ? cartItem.quantity : 1,
        },
      ]);
    }
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem._id !== itemId;
    });

    setCartItems(filteredCartItems);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    // Yeni miktarı kullanarak cartItems'i güncelle
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };
  const clearCart = () => {
    // Sepeti temizleme işlemleri
    setCartItems([]);
  };
  return(
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
      }}
      >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider

CartProvider.prototype = {
  children: PropTypes.node
}