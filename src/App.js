// App.js
import React, { useState } from 'react';
import Product from './Product';
import './App.css'; // Import CSS file for styling
import product1Image from './product1.jpg'; // Import locally stored image for Product 1
import product2Image from './product2.jpg'; // Import locally stored image for Product 1
import product3Image from './product3.jpg'; // Import locally stored image for Product 1

const products = [
  { id: 1, name: 'Product 1', price: 10, image: product1Image }, // Use imported image the
  { id: 2, name: 'Product 2', price: 15, image: product2Image },
  { id: 3, name: 'Product 3', price: 20, image:  product3Image},
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = () => {
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(newTotalPrice);
  };

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    updateTotalPrice(); // Update total price
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    updateTotalPrice(); // Update total price
  };

  const removeAllItems = () => {
    setCartItems([]);
    setTotalPrice(0); // Reset total price
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
