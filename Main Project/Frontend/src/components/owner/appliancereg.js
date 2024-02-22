//import { Container } from "react-bootstrap";
import {useEffect, useReducer, useState } from "react";
import Footer from "./ownerfooter"
import OwnerHeader from "./ownerheader";
import axios from 'axios';

const OwnerForm = () => {
    const init ={
      category:{value:"",valid:false, touch:false, error:""},
      appname:{value:"",valid:false, touch:false, error:""},
      description:{value:"",valid:false, touch:false, error:""},
      price: {value:"",valid:false, touch:false, error:""}
    }

  const reducer = (state,action)=>{
      if(action.type==="update"){
          return {...state,[action.fld]:action.val};
      }
      else{
          return init;
      }
  }

const [data,dispatch] = useReducer(reducer,init);
const [categories, setCategories] = useState([]);

const checkValid = (f,v)=>{
  var res = true
  var m = ""
  if(v === ""){
    res= false;
    m = "field is required"
  }
  return {ch:res,msg:m}
}

const handleChange= (f,v)=>{
  const{ch,msg} = checkValid(f,v);
  console.log(ch)
  dispatch({type:"update",fld:f,val:{value:v,valid:ch,touch:true,error:msg}});
  console.log(data)
}


const[msg1,setMsg1] = useState("")
const[msg2,setMsg2] = useState("")

useEffect(() => {
  axios
    .get("http://localhost:8080/getAllCategory")
    .then((response) => {
      setCategories(response.data);
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
}, []);

const submitAppData = (e)=>{
  e.preventDefault();
  // console.log(localStorage.getItem("uid"))
  // console.log(typeof localStorage.getItem("uid"))
  // console.log("Inside appliance submit data");
  axios.post('http://localhost:8080/saveappliance', {
      name : data.appname.value,
      description: data.description.value,
      pricepermonth: parseFloat(data.price.value),
      user_id: localStorage.getItem("uid"),
      cat_id: parseInt(data.category.value)
    })
    .then((response) => {
      if(response.data.length!=0){

        //alert("Application Submitted Successfully!");
        setMsg1("Application Submitted Successfully!")
        let formData = new FormData();
        formData.append("file", selectedFile);

        axios.post("http://localhost:8080/uploadimage/"+response.data.app_id, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
        .then((response)=>{
            if(response.data==true){
              setMsg2("Image upload succesfully")
              
            }
            else{
              setMsg2("Failed to upload image. You can add later")
            }
        }, (error)=>{
            console.log(error)
            setMsg1("Something went wrong!")
        })
      }
      else{
        setMsg1("Data not submited. Try again!")
      }
    }, (error) => {
        console.log(error)
        setMsg1("Data not submitted! Please try again !")
        setMsg2("File upload failed!")
    });
    setSelectedFile(null)
    dispatch(init)
    
}


const[selectedFile,setSelectedFile] = useState(null);
    return (
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <OwnerHeader />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className="text-left mb-4">Appliance Register</h2>
              <div className="col-md-12 text-center bg-light p-4">
                <form>
                  <div className="mb-3 row">
                    <label
                      for="applianceType"
                      className="col-sm-4 col-form-label text-center"
                    >
                      Appliance Category:
                    </label>
                    <div className="col-sm-8">
                      <select className="form-control" id="applianceType" value={data.category.value} onChange={e=>handleChange("category",e.target.value)} required>
                      <option value="">-------Select ---------</option>
                        {categories.map((category) => (
                          <option key={category.cat_id} value={category.cat_id}>
                            {category.type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={data.category.valid?"valid-feedback":"invalid-feedback"}>
                            {data.category.error}
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      for="name"
                      class="col-sm-4 col-form-label text-center"
                    >
                      Appliance Name :
                    </label>
                    <div className="col-sm-8">
                      <input type="text" class="form-control" id="name" value={data.appname.value} onChange={e=>handleChange("appname",e.target.value)} required/>
                    </div>
                    <div className={data.appname.valid?"valid-feedback":"invalid-feedback"}>
                            {data.appname.error}
                    </div>
                  </div>

                  <div class="mb-3 row">
                    <label
                      for="desc"
                      class="col-sm-4 col-form-label text-center"
                    >
                      Appliance Description
                    </label>
                    <div className="col-sm-8">
                      <textarea class="form-control" id="desc" value={data.description.value} onChange={e=>handleChange("description",e.target.value)} required></textarea>
                    </div>
                    <div className={data.description.valid?"valid-feedback":"invalid-feedback"}>
                            {data.description.error}
                    </div>
                    
                  </div>

                  <div className="mb-3 row">
                    <label
                      htmlFor="image"
                      className="col-sm-4 col-form-label text-center"
                    >
                      Appliance Image:
                    </label>
                    <div className="col-sm-8">
                      <input type="file" className="form-control" id="image" onChange={(e)=>{setSelectedFile(e.target.files[0])}}/>
                    </div>
                  </div>

                  <div class="input-group mb-3">
                    <label
                      htmlFor="price"
                      className="col-sm-4 col-form-label text-center"
                    >
                      Price per month:
                    </label>
                    <div class="input-group-prepend">
                      <span class="input-group-text">₹</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                      value={data.price.value}
                       onChange={e=>handleChange("price",e.target.value)}

                       required
                      
                    />
                    <div class="input-group-append">
                      <span class="input-group-text">.00</span>
                    </div>
                    <div className={data.price.valid?"valid-feedback":"invalid-feedback"}>
                            {data.price.error}
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <div className="col-sm-12 col-form-label text-center">
                      <button type="submit" className="btn btn-primary"
                      onClick={(e)=>{submitAppData(e)}}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                <div className={msg1==='Application Submitted Successfully!'? "alert alert-primary mt-5":"alert alert-danger mt-5"} role="alert" style={{display:msg1!=""? 'block':'none'}}>
                        {msg1}
                </div>

                <div className={msg2==='Image upload succesfully'? "alert alert-primary mt-5":"alert alert-danger mt-5"} role="alert" style={{display:msg2!=""? 'block':'none'}}>
                        {msg2}
                </div>
              </div>
            </div>
          </div>

          
        </div>
        <Footer />
      </div>
    );
};

export default OwnerForm;