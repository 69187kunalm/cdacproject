import { useEffect, useState } from "react";
import Footer from "./userfooter";
import Header from "./userheader";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserHome = ()=>{
    const[appliances,setAppliances] = useState([])
    var uid  =localStorage.getItem("uid")

    useEffect(()=>{
        
        axios
        .get('http://localhost:8080/getallverifiedappliances')
        .then((response) => {
            if(response.data.length>0){
                setAppliances(response.data);
            }
            else{
                console.log("No data found.")
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[])

    const addToCart = (appliance)=>{
        var cartname = `cart_${uid}`;
        let cart = JSON.parse(localStorage.getItem(cartname))
        console.log("Inside addToCart")
        if(cart){
            let itemcart = cart.find(x=> x.appliance.app_id === appliance.app_id) 
            console.log(itemcart)
            if(itemcart){
                console.log("Already present")
            }
            else{
                cart.push({appliance, cnt:1})
                localStorage.setItem(cartname,JSON.stringify(cart))
                console.log("Inside cart")
                console.log(cart)
                console.log("Added succesfully!")
            }
        }
        else{
            cart = [{appliance,cnt:1}]
            localStorage.setItem(cartname,JSON.stringify(cart))
            console.log("Inside cart")
            console.log(cart)
        }
    }
    
    return(
       <div>
            <Header/>
            <div className="container">
                <div class="row"> 
                {   
                
                    appliances.map((appliance)=>(
                        <div className="card mt-4 mb-4 ms-4 me-4" style={{ width: "18rem" }}>
                            <img
                                className="card-img-top"
                                src={"data:image/jpeg;base64,"+appliance.image}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{appliance.name}</h5>
                                <p className="card-text">
                                {appliance.description}
                                </p>
                                <p className="card-text">
                                    <span>Price for a Month: </span><span style={{ color: "green" }}>{appliance.pricepermonth}</span>
                                </p>
                                <Link to="/user/cart" onClick={()=>{addToCart(appliance)}}>AddCart</Link> 
                                {/* <button className="btn btn-primary" onClick={()=>{addToCart(appliance)}}>AddCart</button> */}
                            </div>
                        </div>
                    ))
                }
                </div> 
            </div>
            
        
            <Footer/>
       </div>
    )
}

export default UserHome;