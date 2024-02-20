import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./userheader";
import Footer from "./userfooter";



const UpdateLocationUser = () => {
  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    city: "",
  });

  const navigate = useNavigate();
  var msg = "";

  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/updateLocation/${localStorage.getItem("locid")}`,
        formData
      );
        alert("Location data updated successfully")
        console.log("Location data updated successfully:", response.data);
        navigate('/customerhome')
        
     
    } catch (error) {
        alert("Error updating location data")
        console.error("Error updating location data:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-5 col-md-4 bg-light needs-validation pb-5 pt-5 rounded">
        <div className="row-justify-content-center">
          <h3 className="text-center-mb-5">Update your Address</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="address" className="form-label">
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              value={formData.address}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              value={formData.city}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="pincode" className="form-label">
              Pincode:
            </label>
            <input
              type="text"
              id="pincode"
              className="form-control"
              value={formData.pincode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mt-3 d-grid gap-2 ms-5 me-5">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
          <div
            className={
              msg === "Success"
                ? "alert alert-primary mt-5"
                : "alert alert-danger mt-5"
            }
            role="alert"
            style={{ display: msg !== "" ? "block" : "none" }}
          >
            {msg}
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default UpdateLocationUser;