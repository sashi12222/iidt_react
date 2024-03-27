// App.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import './App.css'; // Import CSS file for styling

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 15, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 20, image: 'https://via.placeholder.com/150' },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price whenever cartItems change
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  return (
    <div className="container">
      <h1 className="title">Shopping Cart</h1>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart-summary">
        <p className="total-price">Total Price: ${totalPrice}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default App;
