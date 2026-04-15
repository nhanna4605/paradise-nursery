import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = useState("landing"); // landing | products | cart
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const Navbar = () => (
    <div className="navbar">
      <h1>🌿 Paradise Nursery</h1>
      <nav>
        <a href="#" onClick={() => setPage("products")}>Home</a>
        <a href="#" onClick={() => setPage("products")}>Plants</a>
        <a href="#" onClick={() => setPage("cart")}>
          <span className="cart-icon">
            🛒
            {totalCount > 0 && <span className="cart-count">{totalCount}</span>}
          </span>
          Cart
        </a>
      </nav>
    </div>
  );

  if (page === "landing") {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1>🌿 Paradise Nursery</h1>
          <p>Bring nature into your home with our beautiful houseplants</p>
          <button className="get-started-btn" onClick={() => setPage("products")}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  if (page === "cart") {
    return (
      <>
        <Navbar />
        <CartItem onContinue={() => setPage("products")} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ProductList onCartClick={() => setPage("cart")} />
    </>
  );
}

export default App;
