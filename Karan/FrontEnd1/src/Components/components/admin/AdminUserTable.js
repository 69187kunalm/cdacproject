// AdminUserTable.js

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AdminUserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    fetch("http://localhost:8080/getalluser")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  console.log(users);
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact No</th>
          <th>Email</th>
          <th>Role Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.contactno}</td>
            <td>{user.login.email}</td>
            <td>{user.login.role.name}</td>
            <td>{/* {user.loc.address==null ?null:user.loc.address} */}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminUserTable;
