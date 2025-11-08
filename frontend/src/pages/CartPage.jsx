import React, { useState } from "react";

export default function CartPage({ cart, removeFromCart }) {
  const [stage, setStage] = useState("cart");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [orderId, setOrderId] = useState(null);

  const total = (cart || []).reduce((s, i) => s + i.price * (i.qty || 1), 0);

  const placeOrder = () => {
    if (cart.length === 0) return alert("Your cart is empty!");
    setStage("bill");
  };

  const confirmOrder = () => {
    if (!address || !payment)
      return alert("Please confirm location and payment!");
    const id = Math.floor(Math.random() * 1000000);
    setOrderId(id);
    setStage("tracking");
    localStorage.setItem(
      "orderDetails",
      JSON.stringify({
        id,
        cart,
        total,
        address,
        payment,
        date: new Date().toLocaleString(),
        status: "Yet to Deliver",
      })
    );
  };

  return (
    <section style={{ paddingTop: 100, textAlign: "center" }}>
      <h2>Your Cart</h2>

      {/* CART VIEW */}
      {stage === "cart" && (
        <>
          {(!cart || cart.length === 0) ? (
            <p>No items yet.</p>
          ) : (
            <div
              style={{
                maxWidth: 700,
                margin: "20px auto",
                textAlign: "left",
                background: "#f9f9f9",
                borderRadius: 10,
                padding: 20,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {cart.map((it) => (
                <div
                  key={it.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: 8,
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div>
                    {it.name} × {it.qty}
                  </div>
                  <div>₹{it.price * it.qty}</div>
                  <button onClick={() => removeFromCart(it.id)}>Remove</button>
                </div>
              ))}
              <h3 style={{ textAlign: "right" }}>Total: ₹{total}</h3>
              <button
                onClick={placeOrder}
                style={{
                  marginTop: 20,
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Place Order
              </button>
            </div>
          )}
        </>
      )}

      {/* BILL CONFIRMATION */}
      {stage === "bill" && (
        <div
          style={{
            maxWidth: 500,
            margin: "auto",
            background: "#fefefe",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Confirm Your Order</h3>
          <p>Total Amount: ₹{total}</p>
          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: "100%", padding: 10, marginBottom: 10 }}
          />
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            style={{ width: "100%", padding: 10 }}
          >
            <option value="">Select Payment Method</option>
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Card Payment</option>
          </select>
          <br />
          <button
            onClick={confirmOrder}
            style={{
              marginTop: 20,
              background: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Confirm Order
          </button>
        </div>
      )}

      {/* TRACKING ORDER */}
      {stage === "tracking" && (
        <div
          style={{
            maxWidth: 500,
            margin: "auto",
            background: "#f0f9ff",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <h3>Order Placed Successfully 🎉</h3>
          <p>Order ID: #{orderId}</p>
          <p>Status: Out for Delivery 🚚</p>
          <p>Estimated Delivery: Within 2 days</p>
        </div>
      )}
    </section>
  );
}
