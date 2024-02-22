import { useEffect, useState } from "react";
import Header from "./userheader";
import Footer from "./userfooter";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Cart = ()=>{


    //const[months,setMonth] = useState(1);
    const navigate = useNavigate();
    const[obj,setObj] = useState([])
    var uid  =localStorage.getItem("uid")
    var cartname = `cart_${uid}`;
    useEffect(()=>{
        setObj(JSON.parse(localStorage.getItem(cartname)));
        console.log(obj)
    },[]); 

    const removeCartItem = (e,o)=>{
        e.preventDefault();
        var arr = JSON.parse(localStorage.getItem(cartname));
        var index = -1;

        for(let i=0; i<arr.length; i++){
            if(arr[i].appliance.app_id == o.appliance.app_id){
                index = i;
                break;
            }
        }

        console.log(index)
        if (index > -1) { // only splice array when item is found
            arr.splice(index, 1); // 2nd parameter means remove one item only
        }

        // array = [2, 9]
        console.log(arr); 
        localStorage.setItem(cartname, JSON.stringify(arr));
        window.location.reload();
    } 
    const handleCnt = (e,o)=>{
        e.preventDefault();
        var arr = JSON.parse(localStorage.getItem(cartname));
        var index = -1;

        for(let i=0; i<arr.length; i++){
            if(arr[i].appliance.app_id == o.appliance.app_id){
                index = i;
                break;
            }
        }

        console.log(index)
        if (index > -1) { // only splice array when item is found
            arr.splice(index, 1); // 2nd parameter means remove one item only
        }
        o.cnt = e.target.value;
        arr.push(o)
        localStorage.setItem(cartname, JSON.stringify(arr));
        window.location.reload();
    }
    
    var totalsum = 0;
    var k = 0;

    const orderNow = (obj)=>{
        var arr = JSON.parse(localStorage.getItem(cartname));
        arr  = []
        obj.map((app)=>{
            var appliance = app.appliance;
            var cnt1 = app.cnt;
            const tempobj = {appliance,cnt:cnt1,price:totalsum};
            arr.push(tempobj);
        })

        console.log("On click payment")
        console.log(arr)
        localStorage.setItem(cartname, JSON.stringify(arr));
        navigate('/userhome/payment')
    }
    return(
        <div>
            <Header/>
            <h2>Your cart</h2>
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Owner Name</th>
                    <th>Select number of months</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {obj.map((app, index) => (
                        
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    className="img-thumbnail"
                                    src={"data:image/jpeg;base64,"+app.appliance.image}
                                    alt="Card image cap"
                                    width={200}
                                    height={200}
                                />
                            </td>
                            <td>{app.appliance.user.fname}</td>
                            <td>
                                <select class="form-select" aria-label="Default select example" 
                                value={app.cnt}
                                onChange={(e)=>{handleCnt(e,app)}} >
                                    <option selected>Open this select menu</option>
                                    <option value="1" >One</option>
                                    <option value="2" >Two</option>
                                    <option value="3" >Three</option>
                                    <option value="4" >Four</option>
                                    <option value="5" >Five</option>
                                    <option value="6" >Six</option>
                                </select>
                            </td>
                            <td>
                                Rs{app.appliance.pricepermonth*app.cnt}/-
                                <div style={{display:'none'}}>{totalsum += app.appliance.pricepermonth*app.cnt}</div>
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={(e)=>{removeCartItem(e,app)}}>Remove</button>
                            </td>
                        </tr>
                ))}
                <tr>
                    <td colSpan={4}>Total</td>
                    <td>{totalsum}</td>
                </tr>
                </tbody>
            </Table>
            <div  className="row">
                <div className="text-end col-sm">
                    <button className="btn btn-primary ms-6" onClick={(e)=>orderNow(obj)}>Order Now</button>     
                </div>
                <div className="col-sm">
                    <button className="btn btn-primary ms-6" onClick={(e)=>navigate('/userhome/updatelocation')} >Change Delivary adress</button>     
                </div> 
            </div>                 
            <Footer/>
        </div>
    )
}

export default Cart;