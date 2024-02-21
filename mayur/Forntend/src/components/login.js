import { useReducer, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AppHeader from "./appheader";
import AppFooter from "./appfooter";

const LoginForm = ()=>{

    const navigate = useNavigate();

    //for captcha
    const[capVal,setCapVal] = useState(null);

    //for ruducer
    const init ={
        email :{value:"",valid:false, touch:false, error:""},
        password :{value:"",valid:false, touch:false, error:""},
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

    //for login failed state
    const[msg,setMsg] = useState("");

    const checkValid = (fld,v)=>{
        var ch = true;
        var msg = "Looks good!";
        switch(fld){
            case "email":
                var exp1  = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
                if(!exp1.test(v)){
                    ch = false;
                    msg = "Please enter valid email.";
                }
                break;
            case "password":
                var exp2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
                if(!exp2.test(v)){
                    ch = false;
                    msg = "Password must contain Minimum 8 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                }
                break;
        }
        return {ch,msg};
    }

    const handleChange= (f,v)=>{
        const{ch,msg} = checkValid(f,v);
        dispatch({type:"update",fld:f,val:{value:v,valid:ch,touch:true,error:msg}});
    }

    const submitData = (e)=>{
        e.preventDefault();
        console.log("Inside submit data");
        axios.post('http://localhost:8080/checkLogin', {
            email : cust.email.value,
            password: cust.password.value
          })
          .then((response) => {
            console.log(response)
            if(response.data.length!=0){
                if(response.data.role.role_id==2){
                   
                    console.log(response)
                    localStorage.setItem('user',response.data.email)
                    localStorage.setItem('uid',response.data.users[0].user_id)
                    localStorage.setItem("locid", response.data.users[0].loc.loc_id);
                    localStorage.setItem('fname',response.data.users[0].fname)
                    localStorage.setItem('login',true)
                    //localStorage.setItem(cartname,[])
                    navigate('/ownerhome')
                }
                else if(response.data.role.role_id==3){
                    console.log("move to cutomer")
                    localStorage.setItem('user',response.data.email)
                    localStorage.setItem('uid',response.data.users[0].user_id)
                    localStorage.setItem("locid", response.data.users[0].loc.loc_id);
                    localStorage.setItem('fname',response.data.users[0].fname)
                    localStorage.setItem('login',true)
                    navigate('/customerhome')
                }
                else if(response.data.role.role_id==1){
                    console.log("move to cutomer")
                    localStorage.setItem('user',response.data.email)
                    localStorage.setItem('uid',response.data.users[0].user_id)
                    localStorage.setItem('fname',response.data.users[0].fname)
                    localStorage.setItem('login',true)
                    navigate('/adminhome')
                }
            }
            else{
                console.log("login failed")
                setMsg("Login failed ! Please relogin.")

            }
          }, (error) => {
            console.log(error)
            setMsg("Something went wrong! Please relogin.")
          });
    }

    return (
        <div>
            <AppHeader/>
            <div className="container mt-5  col-md-4 bg-light needs-validation pb-5 pt-5">
                <div className="row">
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4" style={{backgroundColor:"white"}}>
                        <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
                    </div>
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4">
                        <Link to="/register" style={{textDecoration: "none"}}> Register </Link>
                    </div>

                </div>

                <label for="validationServer01" class="form-label ">Enter Email</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Enter username</label> */}
                    <input type="email" className={cust.email.touch?(cust.email.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="username"required
                    value={cust.email.value} onChange={(e)=>{handleChange("email",e.target.value)}}/>
                    <div id="validationServerUsernameFeedback" className={cust.email.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.email.error}
                    </div>
                </div>

                
                <label for="validationServer01" class="form-label pt-4">Password</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Password</label> */}
                    <input type="password" className={cust.password.touch?(cust.password.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServer01" placeholder="Password"required
                    value={cust.password.value} onChange={(e)=>{handleChange("password",e.target.value)}}/>
                    <div className={cust.password.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.password.error}
                    </div>
                </div>


                <div class="mt-3 ms-5 me-5 pt-4 ps-4">
                    <ReCAPTCHA 
                    sitekey="6Ld2vjgpAAAAAB-cpCkxehmhmZpd-TCmevbbg4De" 
                    onChange={(e)=>{
                        setCapVal(e);
                    }}></ReCAPTCHA>
                </div>

                <div class="mt-3 d-grid gap-2 ms-5 me-5 pt-4">
                    <button className={cust.email.valid && cust.password.valid  ? "btn btn-primary":"btn btn-primary disabled"}
                   onClick={(e)=>{
                    submitData(e);
                   }}>Login</button>
                </div>

                <div className={"alert alert-danger mt-5"} role="alert" style={{display:msg!=""? 'block':'none'}}>
                        {msg}
                </div>

            </div>
            <AppFooter/>
        </div>
    )
}

export default LoginForm;