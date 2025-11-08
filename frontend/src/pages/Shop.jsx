import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";

const API_URL = "http://localhost:4000";

export default function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [addedItemId, setAddedItemId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItemId(product.id);

    // Hide message after 2 seconds
    setTimeout(() => {
      setAddedItemId(null);
    }, 2000);
  };

  if (!products.length) return <p>Loading products...</p>;

  return (
    <div className="shop-container">
      <h2 className="shop-title">🧣 Winter Collection</h2>

      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="product-wrapper">
            <ProductCard
              product={product}
              addToCart={() => handleAddToCart(product)}
            />
            {addedItemId === product.id && (
              <div className="added-message">🎉 {product.name} added to cart!</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
