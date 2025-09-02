import React, { useState } from "react";
import { addProduct, getProducts } from "../utils/storage";

const Admin = () => {
  const [form, setForm] = useState({ name: "", price: "", description: "", category: "" });
  const [products, setProducts] = useState(getProducts());

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert("Name & Price are required!");
    addProduct(form);
    setProducts(getProducts());
    setForm({ name: "", price: "", description: "", category: "" });
  };

  return (
    <div className="container">
      <h1>Admin - Manage Products</h1>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" value={form.name} placeholder="Product Name" onChange={handleChange} />
        <input type="number" name="price" value={form.price} placeholder="Price" onChange={handleChange} />
        <input type="text" name="category" value={form.category} placeholder="Category" onChange={handleChange} />
        <textarea name="description" value={form.description} placeholder="Description" onChange={handleChange}></textarea>
        <button type="submit" className="btn">Add Product</button>
      </form>

      <h2>Products by Category</h2>
      {products.length === 0 ? <p>No products yet.</p> : (
        <div className="product-grid">
          {products.map((p, idx) => (
            <div key={idx} className="product-card">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p><b>Category:</b> {p.category}</p>
              <p><b>Price:</b> Rs.{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
