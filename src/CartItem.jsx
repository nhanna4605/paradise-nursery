import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinue }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon! Thank you for shopping at Paradise Nursery 🌿");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Shopping Cart</h2>
        <div className="cart-empty">
          <p>Your cart is empty. 🌱</p>
          <button className="continue-btn" onClick={onContinue} style={{ marginTop: "1rem" }}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart 🛒</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item)}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item)}>+</button>
            </div>
          </div>
          <button className="delete-btn" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      ))}

      <div className="cart-total">
        Total Amount: ${totalCost.toFixed(2)}
      </div>

      <div className="cart-actions">
        <button className="continue-btn" onClick={onContinue}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
