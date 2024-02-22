import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./userheader";
import Footer from "./userfooter";
import { Table } from "react-bootstrap";


const UserTransaction = ()=>{

    const[trans,setTrans] = useState([])
    const[app,setApp] = useState(null)
    
    useEffect(()=>{
        
        var uid = localStorage.getItem("uid");
        axios
        .get(`http://localhost:8080/getallusertransactions?id=${uid}`)
        .then((response) => {
            console.log("Inside user transactions")
            console.log(response)
            if(response.data.length>0){
                setTrans(response.data);
            }
            else{
                console.log("No data found.")
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    return (
        <div>
            <Header/>
                <h1  className="text-center mt-5">Your Transaction History</h1>
                <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Renting Start Date</th>
                    <th>Renting End Date</th>
                    <th>Amount</th>
                    <th>Mode</th>
                    <th>Status</th>                    
                    <th>To User</th>
                </tr>
                </thead>
                <tbody>
                {trans.map((tr, index) => (
                        
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>  {tr.id}</td>
                            <td>{tr.date}</td>
                            <td>
                                {tr.startdate}
                            </td>
                            <td>
                                {tr.enddate}
                            </td>
                            <td>
                                {tr.amount}
                            </td>
                            <td>
                                {tr.mode}
                            </td>
                            <td>
                                {tr.status==1?"Success":"failure"}
                            </td>
                            <td>
                                {tr.touser.fname}
                            </td>
                        </tr>
                ))}
                </tbody>
            </Table>
            <Footer/>
        </div>
    )
}

export default UserTransaction;