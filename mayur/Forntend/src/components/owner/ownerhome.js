import React from "react";

import { useNavigate } from "react-router-dom";
import OwnerHeader from "./ownerheader";
import Footer from "./ownerfooter";



const OwnerHome = ()=>{
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("ownerform");
    };
  return (

    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <OwnerHeader />

      <div className="flex-grow-1">
        {/* Customer Home Page Content */}
        <h2>This is owner home.</h2>
        <p>
          Rent your appliances hassle-free with RentMyAppliances. Make money by
          sharing your unused appliances with others.
        </p>
        <button className="btn btn-primary" onClick={handleClick} >Get Started</button>
      </div>

      <Footer />
    </div>
  );
}

export default OwnerHome;