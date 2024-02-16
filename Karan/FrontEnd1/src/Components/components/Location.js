import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./owner/ownerheader";
const Location = () => {
  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    city: "",
  });
    const navigate = useNavigate();
    var msg = "";
  useEffect(() => {
    // Retrieve userid from sessionStorage and update formData
    const user_id = sessionStorage.getItem("userid");
    setFormData((prevData) => ({ ...prevData, user_id }));
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/saveLocation",
        formData
      );

        console.log("Location data submitted successfully:", response.data);
        navigate("/login");
    } catch (error) {
      console.error("Error submitting location data:", error);
    }
  };

  return (
    <div>
      
      <div className="container mt-5 col-md-4 bg-light needs-validation pb-5 pt-5 rounded">
        <div className="row-justify-content-center">
          <h3 className="text-center-mb-5">Enter your Address</h3>
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
              Submit
            </button>
          </div>
          <div
            className={
              msg == "Success"
                ? "alert alert-primary mt-5"
                : "alert alert-danger mt-5"
            }
            role="alert"
            style={{ display: msg != "" ? "block" : "none" }}
          >
            {msg}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Location;
