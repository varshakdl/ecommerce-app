import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="container">
      <section className="hero">
        <h1>Select a portal</h1>
        <p>Choose how you want to use the platform</p>
      </section>

      <section className="role-grid">
        <article className="tile">
          <div className="tile__icon">🛍️</div>
          <h2 className="tile__title">Customer Portal</h2>
          <p className="tile__desc">Browse products, place orders, and view purchases.</p>
          <Link to="/customer" className="btn">Enter</Link>
        </article>

        <article className="tile">
          <div className="tile__icon">⚙️</div>
          <h2 className="tile__title">Admin Portal</h2>
          <p className="tile__desc">Add products and manage categories.</p>
          <Link to="/admin" className="btn">Enter</Link>
        </article>
      </section>
    </main>
  );
};

export default Home;
