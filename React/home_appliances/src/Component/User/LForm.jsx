import { useReducer, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const LForm = ()=>{

    
    const init ={
        username :{value:"",valid:false, touch:false, error:""},
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

    const checkValid = (fld,v)=>{
        var ch = true;
        var msg = "Looks good!";
        switch(fld){
            case "username":
                var exp1  = /^[0-9a-zA-Z]{4,15}$/
                if(!exp1.test(v)){
                    ch = false;
                    msg = "Username should be between 4 to 15 characters and contains only digit and characters."
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

    //for capcha
    const[capVal,setCapVal] = useState(null);
    const[str,setStr] = useState('false');
    
    const checkLogin = (e)=>{
        e.preventDefault();
        console.log(cust);
        const reqOption = {
            method:"POST",
            headers:{'content-type':'application/json'},
            body : JSON.stringify({
                username:cust.username.value,
                password:cust.password.value
            })
        }
        
    }

   

    return(
        <div>
          
            <div className="container mt-5  col-md-4 bg-light needs-validation pb-5 pt-5">
                <div className="row">
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4" style={{backgroundColor:"white"}}>
                        <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
                    </div>
                    <div className="col justify-content-center mt-3 mb-3 pt-4 pb-4">
                        <Link to="/register" style={{textDecoration: "none"}}> Register </Link>
                    </div>

                </div>

                <label for="validationServer01" class="form-label ">Enter username</label>
                <div class="input-group has-validation">
                    {/* <label for="validationServer01" class="form-label">Enter username</label> */}
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" className={cust.username.touch?(cust.username.valid? "form-control is-valid":"form-control is-invalid"):"form-control"} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder="username"required
                    value={cust.username.value} onChange={(e)=>{handleChange("username",e.target.value)}}/>
                    <div id="validationServerUsernameFeedback" className={cust.username.valid?"valid-feedback":"invalid-feedback"}>
                        {cust.username.error}
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
                    <button className={cust.username.valid&&cust.password.valid&&capVal!=null ? "btn btn-primary":"btn btn-primary disabled"}
                    onClick={(e)=>{
                        checkLogin(e);
                        // if(str=='true'){
                        //     login();
                        //     navigate('/userhome');
                        // }
                        // else{
                        //     alert("Wronge username or password.");
                        //     navigate('/login');
                        // }
                    }}>Login</button>
                </div>

            </div>
        </div>
    )
}
