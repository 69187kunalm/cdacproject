import {Link } from "react-router-dom";
const Location = ()=>{
    return(
        <div>
           <div className="container mt-5  col-md-4 bg-light needs-validation pb-5 pt-5 rounded">
             
                 <div className="row-justify-content-center">
                     <h3 className="text-center-mb-5">Enter your Address</h3>
                </div>
                 <div className="row">
                    <label for="Address" class="form-label">Address :</label>
                    <input type="text"  id="address"   required/>

                    <label for="city" class="form-label">City :</label>
                    <input type="text" id="city" required/>

                    <label for="pincode" class="form-label">Pincode :</label>
                    <input type="text" id="pincode" required/>
                    </div>
                <div class="mt-3 d-grid gap-2 ms-5 me-5">
                    <button class="btn btn-primary">submit</button>
                </div>
            

            </div>
        </div>
    )
}


export default Location;