// Product.js
import React, { useState } from 'react';
import './Product.css'; // Import CSS file for styling

const Product = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="product">
      <div className="product-column">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="product-column">
        <h3 className="product-name">{product.name}</h3>
      </div>
      <div className="product-column">
        <div className="quantity-container">
          <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <div className="product-column">
        <p className="product-price">${product.price}</p>
        <div className="buttons">
          <button className="save-for-later-btn">Save for Later</button>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
