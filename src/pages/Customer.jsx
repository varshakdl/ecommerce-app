import React, { useState } from "react";
import { getProducts, addOrder } from "../utils/storage";

const Customer = () => {
  const [products] = useState(getProducts());

  const handleOrder = (product) => {
    addOrder(product);
    alert(`${product.name} added to your orders!`);
  };

  return (
    <div className="container">
      <h1>Customer - Browse Products</h1>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((p, idx) => (
            <div key={idx} className="product-card">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p><b>Category:</b> {p.category}</p>
              <p><b>Price:</b> Rs.{p.price}</p>
              <button className="btn" onClick={() => handleOrder(p)}>Order</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Customer;
