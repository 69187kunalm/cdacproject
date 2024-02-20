import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import AdminHeader from "./adminheader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";




const AdminApplianceTable = () => {
  const [appliances, setAppliances] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/getAppliances")
      .then((response) => response.json())
      .then((data) => setAppliances(data))
      .catch((error) => console.error("Error fetching data:", error));
  },[]);

  const handleVerify = (app_id) => {
    console.log(app_id);
    fetch(`http://localhost:8080/verify/${app_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => console.error("Error verifying appliance:", error));
  };
  const handleDelete = (id) => {
    console.log("Delete clicked for appliance with ID:", id);
    fetch(`http://localhost:8080/deleteAppliance?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        window.location.reload();
      })
      .catch((error) =>
        console.error("Error fetching data before delete:", error)
      );
  };

  //const[img,setImg] = useState(null);

  const getImage = (e,id)=>{
        e.preventDefault();
        console.log("Image clicked for appliance with ID:", id);
        const config = { responseType: 'blob' };
        axios.get(`http://localhost:8080/getimage/${id}`, config).then(response => {
        console.log(response.data)
        const url = URL.createObjectURL(response.data);
        //setImg(url);
        localStorage.setItem('imageurl',url);
        navigate('/admin/viewimage');
        
    });
  }

  return (
    <div>
      <AdminHeader />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price per Month</th>
            <th>Owner Name</th>
            <th>Category Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appliances.map((appliance, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{appliance.name}</td>
              <td>{appliance.description}</td>
              <td>Rs{appliance.pricepermonth.toFixed(2)}</td>
              <td>{appliance.user.fname}</td>
              <td>{appliance.category.type}</td>
              <td>
                <button className="btn btn-primary btn-sm" onClick={(e)=>{getImage(e,appliance.app_id)}}>Show Image</button>
              </td>
              <td>
                {appliance.isVerified ? (
                  <Button variant="success" size="sm" disabled>
                    Verified
                  </Button>
                ) : (
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleVerify(appliance.app_id)}
                  >
                    Verify
                  </Button>
                )}
              </td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(appliance.app_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <img src={img} alt="Image" /> */}
    </div>

  );
};

export default AdminApplianceTable;