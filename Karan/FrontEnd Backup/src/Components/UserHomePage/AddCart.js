import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function QuantityEdit() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/user");
  };
  return (
    <div>
      <Header/>      <section
        className="quantity-edit-section"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8">
              <div className="p-5">
                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                <p className="mb-0 text-muted">1 items</p>

                <hr className="my-4" />

                {/* Item 1 */}
                <div className="row mb-4">
                  {/* Item Image */}
                  <div className="col-md-2">
                    <img
                      src="data:image/jpeg;base64,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"
                      className="img-fluid rounded-3"
                      alt="Cotton T-shirt"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="col-md-3">
                    <h6 className="text-muted">Washing Machine</h6>
                    <h6 className="text-black mb-0">Washing Machine</h6>
                  </div>

                  {/* Quantity Edit */}
                  <div className="col-md-3 d-flex align-items-center">
                    <button className="btn btn-link px-2">
                      <i className="fas fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      min="0"
                      defaultValue={1}
                      className="form-control form-control-sm"
                    />
                    <button className="btn btn-link px-2">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  {/* Item Price */}
                  <div className="col-md-2 text-end">
                    <h6>RS 44.00</h6>
                  </div>

                  {/* Remove Item */}
                  <div className="col-md-1 text-end">
                    <a href="#!" className="text-muted">
                      <i className="fas fa-times"></i>
                    </a>
                  </div>
                </div>

                {/* Other Items... */}

                <hr className="my-4" />

                {/* Back to Shop */}
                <div className="pt-5">
                  <h6 className="mb-0">
                    <a href="#!" className="text-body">
                      <i className="fas fa-long-arrow-alt-left me-2"></i>
                      <button onClick={handleLoginClick}>Back</button>
                    </a>
                  </h6>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="col-lg-4 bg-grey">
              <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                <hr className="my-4" />

                {/* Items Total */}
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="text-uppercase">items 3</h5>
                  <h5>RS 132.00</h5>
                </div>

                {/* Shipping */}
                <h5 className="text-uppercase mb-3">Shipping</h5>
                <div className="mb-4 pb-2">
                  <select
                    className="form-select p-2 rounded bg-grey"
                    style={{ width: "100%" }}
                  >
                    <option value="1">Standard-Delivery- RS 5.00</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>

                {/* Discount Code */}
                <h5 className="text-uppercase mb-3">Give code (if any)</h5>
                <div className="mb-5">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your code"
                  />
                </div>

                <hr className="my-4" />

                {/* Total Price */}
                <div className="d-flex justify-content-between mb-5">
                  <h5 className="text-uppercase">Total price</h5>
                  <h5>RS 137.00</h5>
                </div>

                {/* Register Button */}
                <button className="btn btn-dark btn-lg w-100">
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
