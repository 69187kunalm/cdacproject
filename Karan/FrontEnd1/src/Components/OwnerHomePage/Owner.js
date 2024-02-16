// CustomerHomePage.js

import React from "react";

import { useNavigate } from "react-router-dom";
import OwnerHeader from "./OwnerHeader";
import Footer from "./OwnerFooter";

const CustomerHomePage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/ownerform");
    };
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <OwnerHeader />

      <div className="flex-grow-1">
        {/* Customer Home Page Content */}
        <h1>Welcome to RentMyAppliances</h1>
        <p>
          Rent your appliances hassle-free with RentMyAppliances. Make money by
          sharing your unused appliances with others.
        </p>
        <button className="btn btn-primary" onClick={handleClick} >Get Started</button>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerHomePage;
