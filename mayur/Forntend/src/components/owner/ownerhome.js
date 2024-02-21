import React from "react";
import { useNavigate } from "react-router-dom";
import OwnerHeader from "./ownerheader";
import Footer from "./ownerfooter";

// Import your image
import ownerHomeImage from "./undraw_Pitching_re_fpgk.png";

const OwnerHome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("ownerform");
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <OwnerHeader />
      <div
        className="flex-grow-1"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <h2>This is owner home.</h2>
        <p>
          Rent your appliances hassle-free with RentMyAppliances. Make money by
          sharing your unused appliances with others.
        </p>
        <img
          src={ownerHomeImage}
          alt="Owner Home"
          style={{ maxWidth: "100%", marginBottom: "20px" }}
        />

        
      </div>
      <Footer />
    </div>
  );
};

export default OwnerHome;