// AdminHomePage.js

import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "./FooterAdmin";

const AdminHomePage = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <AdminHeader />

      <div className="flex-grow-1">
        {/* Admin Home Page Content */}
        <h1>Welcome to the Admin Panel</h1>
        <p>This is the dashboard for managing users, products, and settings.</p>
      </div>

      <Footer/> 
    </div>
  );
};

export default AdminHomePage;
