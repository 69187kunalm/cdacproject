
import { useEffect, useState } from "react";
import Header from "./userheader";
import Footer from "./userfooter";
import { Table ,Modal} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';


const Payment = ()=>{

    const[obj,setObj] = useState([])
    const[total,setTotal] = useState(0)
    const [alert, setAlert] = useState(false);
    var uid  =localStorage.getItem("uid")
    var cartname = `cart_${uid}`;

    const [showModal, setShowModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [upiId, setUpiId] = useState(" ");

    var navigate = useNavigate();


    useEffect(()=>{
        setObj(JSON.parse(localStorage.getItem(cartname)));
        obj.map((o)=>{
            console.log("Inside loop")
            console.log(o.price)
            setTotal(o.price)
        })
    },[]);

    const makePayment = ()=>{
        setShowModal(true);
        
    }

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleUPIInputChange = (event) => {
        setUpiId(event.target.value);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmPayment = () => {
        if (paymentMethod === "upi") {
            if (!upiId || !validateUPI(upiId)) {
                setAlert("Please enter a valid UPI ID.")
                //<Alert severity="info">Please enter a valid UPI ID</Alert>
                //alert("Please enter a valid UPI ID.");
                return;
            }
        }

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
                mode: paymentMethod,
                startdate:startdate1,
                enddate : enddate1,
                app_id: app_id1,
                upi_id: upiId
            })
            .then((response) => {
                console.log("Inside response of transaction")
                console.log(response)
                if(response.data != null){
                    localStorage.setItem(cartname,JSON.stringify([]));
                    setAlert("Transaction Successful!")
                    //<Alert severity="success"> Transaction Successful!</Alert>
                    navigate("/userhome/usertransactions")
                }
                else{
                    setAlert("Transaction Failed!")
                    //<Alert severity="error"> Transaction Failed!</Alert>
                }
            }, (error) => {
                console.log(error);
                navigate("/errorpage")
                setAlert("Something went wrong!")
            });

        })
        
    };

    const validateUPI = (upiId) => {
        // Regular expression pattern for UPI ID validation
        const upiPattern = /^[\w.-]+@[\w.-]+$/;
        return upiPattern.test(upiId);
    };

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

                {/* Modal for Payment */}
                    <Modal show={showModal} onHide={handleCloseModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Make Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="paymentMethod" className="form-label" >Payment Method:</label>
                                <select id="paymentMethod" className="form-select" value={paymentMethod} onChange={handlePaymentMethodChange} required>
                                    <option value="upi">UPI</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>
                            {paymentMethod === "upi" && (
                                <div className="mb-3">
                                    <label htmlFor="upiId" className="form-label">UPI ID:</label>
                                    <input type="text" className="form-control" id="upiId" value={upiId} onChange={handleUPIInputChange} pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/" required/>
                                    {alert != "" ? <Alert severity='error'>{alert}</Alert> : <></> }
                                </div>

                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            <button className="btn btn-primary" onClick={handleConfirmPayment}>Confirm Payment</button>
                        </Modal.Footer>
                    </Modal>                   
                <Footer/>
            </div>
    )
}
export default Payment;