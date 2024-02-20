import { useEffect, useState } from "react";
import Footer from "./userfooter";
import Header from "./userheader";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserHome = ()=>{
    const [searchResult ,setSearchResult] = useState("");

    const[appliances,setAppliances] = useState([])
 
    const [msg, setMsg] = useState("");

    
    const handleSearch = () => {
        if (searchResult.trim() === "") {
            // If the search box is empty, fetch all appliances
            axios
                .get('http://localhost:8080/getallverifiedappliances')
                .then((response) => {
                    if (response.data.length > 0) {
                        setAppliances(response.data);
                        setMsg(""); // Reset the message when results are found
                    } else {
                        setAppliances([]);
                        setMsg("No appliances found.");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // If the search box is not empty, perform the search
            axios
                .get(`http://localhost:8080/searchappliance/${searchResult}`)
                .then((response) => {
                    if (response.data.length > 0) {
                        setAppliances(response.data);
                        setMsg(""); // Reset the message when results are found
                    } else {
                        setAppliances([]);
                        setMsg("No results found.");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
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
        console.log(appliance)
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(cart){
            let itemcart = cart.find(x=> x.appliance.app_id === appliance.app_id) 
            console.log(itemcart)
            if(itemcart){
                console.log("Already present")
            }
            else{
                cart.push({appliance})
                localStorage.setItem('cart',JSON.stringify(cart))
                console.log("Added succesfully!")
            }
        }
        else{
            cart = [{
                appliance
            }]
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    }
    
    return(
       <div>
            <Header/>
          
                
                <div className="container mt-4">

            <div className="custom-search-box" style={{ maxWidth: '950px' }}>
                <form className="form-inline">
                    <div className="input-group  rounded-pill" >
                        <input type="text" className="form-control rounded-pill" placeholder="Search..." aria-label="Search" aria-describedby="search-btn" value={searchResult}  onChange={(e)=>setSearchResult(e.target.value)}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary rounded-pill" type="button" id="search-btn" onClick={handleSearch}>search
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {appliances.length === 0 && searchResult && (
                    <div className="alert alert-warning mt-3" role="alert">
                       {msg}
                    </div>
                )}
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