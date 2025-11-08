 🧣 Winter Vogue — Fullstack E-Commerce App

🏷️ Overview

Winter Vogue is a full-stack **winter fashion e-commerce web application** that allows users to browse and purchase trendy, eco-friendly winter wear.
The project focuses on a clean user experience, seamless cart management, and interactive order tracking — making it a modern shopping solution.

Developed as part of an **academic full-stack web development assignment** to demonstrate integration of **frontend (React)**, **backend (Node.js + Express)**, and **database (MongoDB)** technologies.
---

 🛠️ Tech Stack

| Layer                     | Technology            | Description                                       |
| ------------------------- | --------------------- | ------------------------------------------------- |
| **Frontend**              | React.js              | User interface with routing and dynamic rendering |
| **Styling**               | CSS3, Flexbox, Grid   | Responsive and modern UI design                   |
| **Backend**               | Node.js, Express.js   | REST API for product, cart, and order management  |
| **Database**              | MongoDB               | Stores product details, orders, and user profiles |
| **HTTP Client**           | Axios                 | Handles API calls between frontend and backend    |
| **Routing**               | React Router DOM      | Smooth navigation between pages                   |
| **Deployment (optional)** | GitHub Pages / Render | Host frontend and backend                         |

---

## 🌟 Features

### 🏠 Home Page

* Beautiful winter-themed design with an introductory section and cozy shopping vibe.
* Highlighted collection showcase and animation for an engaging experience.
  <img width="1255" height="843" alt="image" src="https://github.com/user-attachments/assets/a0b3ef5c-8205-4de4-a914-2bb3cb326a20" />

### 🛍️ Shop Page

* Fetches products dynamically from backend (`/api/products`).
* Displays them as **uniform, responsive cards** in a grid layout.
* Each product card includes an image, name, price, and **Add to Cart** button.
* Displays a 🎉 celebration message when a product is added.
<img width="1228" height="864" alt="image" src="https://github.com/user-attachments/assets/b42f9ae4-18f5-46a5-8637-ba2f14a2b93c" />

### 🛒 Cart Page

* Shows all added items with quantity, total price, and remove option.
* Displays a **“Place Order”** button.
* On clicking, opens a simulated **billing, location confirmation, and payment selection** modal.
  <img width="1630" height="834" alt="image" src="https://github.com/user-attachments/assets/afed147f-ec60-4067-a703-7e9caae51791" />
  <img width="1622" height="655" alt="image" src="https://github.com/user-attachments/assets/5222828f-c2e2-4d9a-beb3-86da24c02fb6" />
  <img width="1741" height="817" alt="image" src="https://github.com/user-attachments/assets/4e1a4607-404b-4ab9-9036-ed25422cddbf" />


### 📦 Order Tracking

* After order confirmation, shows **real-time order tracking status**:

  * Ordered
  * Packed
  * Shipped
  * Out for Delivery
  * Delivered ✅
    

### 👤 Profile Page

* Displays customer details and past orders with timestamp and delivery status.
* Editable **“My Details”** section to update profile information.
* Visually styled with card layout and accent colors.
  <img width="1490" height="855" alt="image" src="https://github.com/user-attachments/assets/c19aefb2-8c75-4907-b322-ac2a792baa1d" />


### ℹ️ About Page

* Describes the brand’s sustainable approach and eco-friendly winter wear mission.
* Includes inspiring design and community message.
  <img width="1588" height="845" alt="image" src="https://github.com/user-attachments/assets/d448536a-68f4-4c1e-8dc1-6245d1f96197" />


---

## 🧩 Project Structure

```
winter_vogue_fullstack/
│
├── backend/
│   ├── server.js               # Express server setup
│   ├── models/
│   │   └── productModel.js     # Product schema (MongoDB)
│   ├── routes/
│   │   └── productRoutes.js    # Product API routes
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── About.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ashika-Ashok/winter-vogue.git
cd winter-vogue
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Start the backend server:

```bash
npm start
```

Backend will run on: `http://localhost:4000`

---

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173` (Vite default port)
Ensure both servers are running simultaneously.

---

## 🧾 API Endpoints

| Method   | Endpoint           | Description         |
| -------- | ------------------ | ------------------- |
| **GET**  | `/api/products`    | Fetch all products  |
| **POST** | `/api/orders`      | Place a new order   |
| **GET**  | `/api/orders/:id`  | Fetch order details |
| **PUT**  | `/api/profile/:id` | Update user details |

---

## 🧠 Learning Outcomes

* Building and deploying a **full-stack MERN application**.
* Managing state and API integration using React Hooks.
* Handling responsive layouts using CSS Grid and Flexbox.
* Creating modular, reusable UI components.
* Implementing CRUD operations using Express and MongoDB.

---

## 💬 Future Enhancements

* Integration with a real payment gateway.
* Email notifications for order status updates.
* User authentication and login system.
* Admin dashboard for managing inventory and users.

