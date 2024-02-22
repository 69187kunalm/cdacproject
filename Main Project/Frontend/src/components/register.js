import React from "react";
import {useReducer, useState } from "react";
import {Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import AppFooter from "./appfooter";
import AppHeader from "./appheader";
import { useNavigate } from "react-router-dom";

const RegisterForm = ()=>{

    const navigate = useNavigate();
    const init ={
        firstname:{value:"",valid:false, touch:false, error:""},
        lastname:{value:"",valid:false, touch:false, error:""},
        email:{value:"",valid:false, touch:false, error:""},
        mobileno: {value:"",valid:false, touch:false, error:""},
        password :{value:"",valid:false, touch:false, error:""},
        confirmpassword :{value:"",valid:false, touch:false, error:""}
    }

    const reducer = (state,action)=>{
        if(action.type==="update"){
            return {...state,[action.fld]:action.val};
        }
        else{
            return init;
        }
    }

    const [cust,dispatch] = useReducer(reducer,init);
    // const [email1,setEmail] = useState("");
    // const [username,setUsername] = useState("");

    //for button
    // const [bt,setbt] = useState(false);

    //for cpatcha
    const[capVal,setCapVal] = useState(null);
    //for radio button
    const[radioVal,setRadio] = useState(null);

    const checkValid = (fld,v)=>{
        var ch = true;
        var msg = "Looks good!";
        switch(fld){
            case "firstname":
                var exp1 = /^[A-Z]{1}[a-z]{1,15}$/;
                if(!exp1.test(v)){
                    ch = false;
                    msg = 'First character must be capital and rest are small.'
                }
                break;
            case "lastname":
                var exp2 = /^[A-Z]{1}[a-z]{1,15}$/;
                if(!exp2.test(v)){
                    ch = false;
                    msg = 'First character must be capital and rest are small.';
                }
                break;
            case "email":
                var exp3 = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
                // var url = "http://localhost:9000/valid_email?email=%27"+v+"%27";
                // console.log(url);
                // fetch(url).then((resp)=>{return resp.text()}).then((data)=>{setEmail(data)});
                // console.log(email);
                if(!exp3.test(v)){
                    ch=false;
                    msg = "Please enter valid email."
                }
                // else if(exp3.test(v)){
                //     var url = "http://localhost:9000/valid_email?email=%27"+v+"%27";
                //     fetch(url).then((resp)=>{return resp.text()}).then((data)=>{
                //         if(data=='false'){
                //             ch=false;
                //             msg = "Email already taken";
                //         }
                //     });
                // }
                break;
            case "mobileno":
                var exp4 = /^[0-9]{10}$/;
                if(!exp4.test(v)){
                    ch = false;
                    msg = "Please enter valid mobile number."
                }
                break;
            
            case "password":
                var exp6 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
                if(!exp6.test(v)){
                    ch = false;
                    msg = "Password must contain Minimum 8 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                }
                if(cust.confirmpassword.value.length != 0){
                    cust.confirmpassword.value = "";
                    cust.confirmpassword.touch = false;
                }
                break;
            case "confirmpassword":
                // console.log(v);
                console.log(cust.password)
                if(cust.password.value != v){
                    ch = false;
                    msg = "Password mismatched."
                }
                break;
            
        }
        // console.log(ch +" " +msg);
        return {ch,msg};
    }

    const handleChange= (f,v)=>{
        const{ch,msg} = checkValid(f,v);
        dispatch({type:"update",fld:f,val:{value:v,valid:ch,touch:true,error:msg}});
    }

    const[msg,setMsg] = useState("");

    
    const submitData = (e)=>{
        e.preventDefault();
        console.log("Inside submit data");
        axios.post('http://localhost:8080/register', {
            fname : cust.firstname.value,
            lname : cust.lastname.value,
            email : cust.email.value,
            password: cust.password.value,
            contact_no: cust.mobileno.value,
            role: radioVal
          })
          .then((response) => {
            console.log(response)
            var data = response.data
            var data = response.data;
            sessionStorage.setItem("userid", data.user_id);
            console.log(data.user_id);
            dispatch(init)
            setCapVal(null)
            if(data!=null){
                setMsg("Success")
                navigate("/register/location")
            }
            else setMsg("Something went wrong... Try again")
          }, (error) => {
            console.log(error);
            dispatch(init)
            setCapVal(null)
            navigate("/errorpage")
            setMsg("Something went wrong... Try again")
          });
    }
    
    return(
        <div>
            <AppHeader/>
            <div className="container mt-5  col-md-4 bg-light needs-validation pb-5 pt-5 rounded">
                <div className="row">
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4">
                        <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
                    </div>
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4" style={{backgroundColor:"white"}}>
                        <Link to="/register" style={{textDecoration: "none"}} > Register </Link>
                    </div>
                </div>

                <div className="row">
                    <div class="col-md">
                        <label  class="form-label">First name</label>
                        <input type="text" className={cust.firstname.touch?(cust.firstname.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="First name" required
                        value={cust.firstname.value}
                        onChange={(e)=>{
                            handleChange("firstname",e.target.value);
                        }}/>
                        <div className={cust.firstname.valid?"valid-feedback":"invalid-feedback"}>
                            {cust.firstname.error}
                        </div>
                    </div>
                    <div class="col-md">
                        <label  class="form-label">Last name</label>
                        <input type="text" className={cust.lastname.touch?(cust.lastname.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="Last name" required
                        value={cust.lastname.value}
                        onChange={(e)=>{
                            handleChange("lastname",e.target.value);
                        }}/>
                        <div className={cust.lastname.valid?"valid-feedback":"invalid-feedback"}>
                            {cust.lastname.error}
                        </div>
                    </div>
                </div>

                <label  className="form-label">Email</label>
                <input type="email" className={cust.email.touch?(cust.email.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="email" required
                value={cust.email.value}
                onChange={(e)=>{
                    handleChange("email",e.target.value);
                }}/>
                <div className={cust.email.valid?"valid-feedback":"invalid-feedback"}>
                    {cust.email.error}
                </div>

                <label className="form-label ">Mobile No:</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Enter username</label> */}
                    <span class="input-group-text" id="inputGroupPrepend3">+91</span>
                    <input type="text" className={cust.mobileno.touch?(cust.mobileno.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="Mobile No"required
                    value={cust.mobileno.value}
                    onChange={(e)=>{
                        handleChange("mobileno",e.target.value);
                    }}/>
                    <div className={cust.mobileno.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.mobileno.error}
                    </div>
                </div>



                <label className="form-label ">Password</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Password</label> */}
                    <input type="password" className={cust.password.touch?(cust.password.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="Password"required
                    value={cust.password.value} onChange={(e)=>{handleChange("password",e.target.value)}}/>
                    <div className={cust.password.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.password.error}
                    </div>
                </div>

                <label  className="form-label">Confirm Password</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Password</label> */}
                    <input type="password" className={cust.confirmpassword.touch?(cust.confirmpassword.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="confirmpassword"required
                    value={cust.confirmpassword.value} onChange={(e)=>{handleChange("confirmpassword",e.target.value)}}/>
                    <div className={cust.confirmpassword.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.confirmpassword.error} 
                    </div>
                </div>

                <div className="mt-4">
                
                    <div className="row">
                        <label  className="form-label col-md">Register As</label>
                        <div class="form-check  col-md">
                            <input type="radio" class="form-check-input" name="radio-stacked"  onChange={(e)=>{
                                setRadio(2);
                            }} required/>
                            <label class="form-check-label" for="validationFormCheck2">Owner</label>
                        </div>
                        <div class="form-check mb-3 col-md">
                            <input type="radio" class="form-check-input" name="radio-stacked" onChange={(e)=>{
                                setRadio(3);
                            }}required/>
                            <label class="form-check-label" for="validationFormCheck3">Customer</label>
                            <div class="invalid-feedback">Please select any one</div>
                        </div>
                    </div>
                </div>

                {/* <div class="mt-3 ms-5 me-5 pt-4 ps-4">
                    <ReCAPTCHA 
                    sitekey="6Ld2vjgpAAAAAB-cpCkxehmhmZpd-TCmevbbg4De" 
                    onChange={(e)=>{
                        setCapVal(e);
                    }}></ReCAPTCHA>
                </div> */}

                <div class="mt-3 d-grid gap-2 ms-5 me-5">
                    <button className={cust.firstname.value && cust.lastname.valid && cust.email.valid && cust.mobileno.valid 
                        && cust.password.valid && cust.confirmpassword.valid && radioVal != null ? "btn btn-primary":"btn btn-primary disabled"}
                        onClick={(e)=>{
                            submitData(e);
                        }}>Register</button>
                </div>

                <div className={msg=='Success'? "alert alert-primary mt-5":"alert alert-danger mt-5"} role="alert" style={{display:msg!=""? 'block':'none'}}>
                        {msg}
                </div>
            </div>
            <AppFooter/>
        </div>
    )
}

export  default RegisterForm; 