import React from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./adminheader";
import Footer from "./adminfooter";

// Import your image
import adminHomeImage from "./undraw_Programming_re_kg9v.png";

const AdminHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Handle click event
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <AdminHeader />

      <div
        className="flex-grow-1"
        style={{ padding: "20px", textAlign: "center" }}
      >
        {/* Display your image */}

        {/* Admin Home Page Content */}
        <h1>Welcome to the Admin Panel</h1>
        <p>This is the dashboard for managing users, products, and settings.</p>
        {/* You can add a button here if needed */}
        <img
          src={adminHomeImage}
          alt="Admin Home"
          style={{ maxWidth: "100%", marginBottom: "20px" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AdminHome;