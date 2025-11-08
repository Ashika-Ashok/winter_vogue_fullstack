// src/components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="img-box">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
