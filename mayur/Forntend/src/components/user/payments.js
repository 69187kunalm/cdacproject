
import { useEffect, useState } from "react";
import Header from "./userheader";
import Footer from "./userfooter";
import { Table } from "react-bootstrap";
import axios from "axios";

const Payment = ()=>{

    const[obj,setObj] = useState([])
    const[total,setTotal] = useState(0)
    var uid  =localStorage.getItem("uid")
    var cartname = `cart_${uid}`;
    useEffect(()=>{
        setObj(JSON.parse(localStorage.getItem(cartname)));
        obj.map((o)=>{
            console.log("Inside loop")
            console.log(o.price)
            setTotal(o.price)
        })
    },[]);

    const makePayment = ()=>{
        let currentDate = new Date().toJSON().slice(0, 10);
        console.log("Inside date")
        console.log(currentDate)
        var cartname = `cart_${uid}`;
        obj.map((app)=>{
            var touser1 = app.appliance.user.user_id;
            var amount1 = app.appliance.pricepermonth*app.cnt;
            var curr = new Date();
            curr.setDate(curr.getDate()+1);
            var duration1 = app.cnt;
            var startdate1 = curr.toJSON().slice(0, 10);
            curr.setDate(curr.getDate()+(duration1*28));
            var enddate1 =  curr.toJSON().slice(0, 10);
            var app_id1  = app.appliance.app_id;
            axios.post('http://localhost:8080/savetransaction', {
                date: currentDate,
                doneby: uid,
                touser: touser1,
                amount: amount1,
                mode:"UPI",
                startdate:startdate1,
                enddate : enddate1,
                app_id: app_id1
            })
            .then((response) => {
                console.log("Inside response of transaction")
                console.log(response)
                if(response.data != null){
                    localStorage.setItem(cartname,JSON.stringify([]))
                    alert("Successfull!!")
                }
                else{
                    alert("Failed!")
                }
            }, (error) => {
                alert("error!")
            });
        })
        
    }

    return(
        <div>
            <Header/>
                <h2>Payment Summary</h2>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Appliance name</th>
                        <th>Price per month</th>
                        <th>Total Months</th>
                        <th>Payment to</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {obj.map((app, index) => (
                            
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    {app.appliance.name}
                                </td>
                                <td>{app.appliance.pricepermonth}</td>
                                <td>
                                    {app.cnt}
                                </td>
                                <td>
                                    {app.appliance.user.fname}
                                </td>
                                <td>
                                    Rs{app.appliance.pricepermonth*app.cnt}/-
                                </td>
                            </tr>

                    ))}
                    <tr>
                        <td colSpan={5}>Total</td>
                        <td>{total}</td>
                    </tr>
                    </tbody>
                </Table>
                <div className="text-center">
                    <button className="btn btn-primary ms-6" onClick={makePayment}>Make Payment</button>     
                </div>                   
                <Footer/>
            </div>
    )
}
export default Payment;