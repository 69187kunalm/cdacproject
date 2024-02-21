import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import errorImage from "./errorpage.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ErrorPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <img
        src={errorImage}
        alt="Error"
        className="img-fluid mb-4"
        style={{ maxWidth: "50%" }}
      />
      <h1 className="display-4 mb-3">Oops! Something went wrong</h1>
      <p className="lead mb-4">
        We're sorry, but it seems like there's an issue. Please try again later.
      </p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
