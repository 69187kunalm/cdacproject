// Footer.js

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center p-3 mt-auto">
      <Container>
        <div className="row">
          {/* ... (rest of the content remains the same) */}
        </div>
      </Container>
      <hr className="my-3" />
      <p>&copy; 2024 My Appliances. All rights reserved.</p>
    </footer>
  );
};

export default Footer;