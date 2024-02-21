// // AdminHeader.js

// import React from "react";
// import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const AdminHeader = () => {

//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.setItem("login",false);
//         navigate("/login");
//     };
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#users">Users</Nav.Link>
//             <Nav.Link href="/admin/appiancerequest">Appliance Verification</Nav.Link>
//             <Nav.Link href="#users">Settings</Nav.Link>
//           </Nav>

//           <Button variant="link" onClick={handleLogout} className="ml-auto">
//                 Logout
//             </Button>

//         <p style={{color:"red"}}>Hello! {localStorage.getItem('user')}</p>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AdminHeader;


// AdminHeader.js

import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("login", false);
    navigate("/login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/adminhome">Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/admin/adminusertable">Users</Nav.Link>
            <Nav.Link href="/admin/appiancerequest">Appliance Requests</Nav.Link>
            <Nav.Link href="#" style={{ color: "red" }} disabled>
              {" "}
              Hello! {localStorage.getItem("fname")}
            </Nav.Link>
          </Nav>

          <Button
            variant="link"
            onClick={handleLogout}
            className="ml-auto"
            style={{ textDecoration: "none", color: "white" }}
            
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;