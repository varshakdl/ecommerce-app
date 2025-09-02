import React, { useState } from "react";
import { getOrders } from "../utils/storage";

const Orders = () => {
  const [orders] = useState(getOrders());

  return (
    <div className="container">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="product-grid">
          {orders.map((o, idx) => (
            <div key={idx} className="product-card">
              <h3>{o.name}</h3>
              <p>{o.description}</p>
              <p><b>Category:</b> {o.category}</p>
              <p><b>Price:</b> Rs.{o.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
