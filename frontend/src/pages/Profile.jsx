import React, { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Ashika",
    email: "ashika0424@gmail.com",
    address: "Udupi, Karnataka, India",
    phone: "+91 8861693478",
  });

  const [orders, setOrders] = useState([
    { id: "ORD1023", item: "Puffer Winter Jacket", date: "2025-11-02", status: "Delivered" },
    { id: "ORD1024", item: "Chunky Wool Scarf", date: "2025-11-07", status: "Out for Delivery" },
  ]);

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section
      style={{
        paddingTop: 100,
        textAlign: "center",
        background: "linear-gradient(135deg, #f0f7ff, #ffffff)",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ color: "#1e3a8a", fontSize: "2rem", marginBottom: "20px" }}>My Profile</h2>

      {/* Profile Card */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>👤 Personal Details</h3>

        {editMode ? (
          <>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Phone"
            />
            <textarea
              name="address"
              value={user.address}
              onChange={handleChange}
              style={{ ...inputStyle, height: "80px" }}
              placeholder="Address"
            />
            <button
              onClick={() => setEditMode(false)}
              style={saveBtn}
            >
              💾 Save Changes
            </button>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button
              onClick={() => setEditMode(true)}
              style={editBtn}
            >
              ✏️ Edit Profile
            </button>
          </>
        )}
      </div>

      {/* Orders Section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          background: "#ffffff",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#333" }}>📦 My Orders</h3>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
              padding: "10px 0",
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: "bold" }}>{order.item}</p>
              <p style={{ margin: "4px 0", color: "#555" }}>Ordered on: {order.date}</p>
            </div>
            <span
              style={{
                background:
                  order.status === "Delivered"
                    ? "#16a34a22"
                    : "#eab30822",
                color:
                  order.status === "Delivered"
                    ? "#16a34a"
                    : "#ca8a04",
                padding: "6px 12px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const saveBtn = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const editBtn = {
  background: "#1e3a8a",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};
