import React from "react";
import AppFooter from "../appfooter";
import AppHeader from "../appheader";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import image1 from "./img4.jpg";
import image2 from "./img6.jpg";
import image3 from "./img7.jpg";

const Home = () => {
  return (
    <div>
      <AppHeader />
      <Carousel>
        <Carousel.Item interval={1000}>
          <div
            className="d-flex justify-content-center align-items-center border rounded"
            style={{ height: "500px" }}
          >
            <img className="w-75" src={image1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div
            className="d-flex justify-content-center align-items-center border rounded"
            style={{ height: "500px" }}
          >
            <img className="w-75" src={image2} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div
            className="d-flex justify-content-center align-items-center border rounded"
            style={{ height: "500px" }}
          >
            <img className="w-75" src={image3} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="text-center mt-5 mb-5 ">
        <Button variant="primary" href="/login">
          Login
        </Button>
      </div>
      <AppFooter />
    </div>
  );
};

export default Home;
