const UpdateForm = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2 className="text-left mb-4">Update Profile</h2>
            <div className="col-md-12 text-center bg-light p-4" >    
                <form>
                <div className="mb-3 row">
                    <label label for="staticEmail" className="col-sm-4 col-form-label text-center">Email :</label>
                    <div className="col-sm-8">
                    <input type="text" readOnly className="form-control" id="staticEmail" value="customer@gmail.com" />
                    </div>
                </div>
                {/* <div className="mb-3 row">
                    <label label for="Pass" className="col-sm-4 col-form-label text-center">Password :</label>
                    <div className="col-sm-8">
                    <input type="password" className="form-control" id="Pass" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label label for="Pass1" className="col-sm-4 col-form-label text-center">Confirm Password :</label>
                    <div className="col-sm-8">
                    <input type="password" className="form-control" id="Pass1" />
                    </div>
                </div> */}


                    <div className="mb-3 row">
                        <label for="fname" class="col-sm-4 col-form-label text-center">First Name :</label>
                        <div className="col-sm-8">
                            <input type="text" class="form-control" id="fname"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="lname" class="col-sm-4 col-form-label text-center">Last Name :</label>
                        <div className="col-sm-8">
                            <input type="text" class="form-control" id="lname"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="con" class="col-sm-4 col-form-label text-center">Contact No :</label>
                        <div className="col-sm-8">
                            <input type="text" class="form-control" id="con"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="inputAddress" class="col-sm-4 col-form-label text-center">Address :</label>
                        <div className="col-sm-8">
                            <input type="text" class="form-control" id="inputAddress"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="city" class="col-sm-4 col-form-label text-center">City :</label>
                        <div className="col-sm-8">
                            <input type="text" class="form-control" id="city"/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="pin" class="col-sm-4 col-form-label text-center">Pin Code :</label>
                        <div className="col-sm-8">
                            <input type="text" class="form-control" id="pin"/>
                        </div>
                    </div>

                    <div class="mb-3 row" >
                        <div>
                            <button type="submit" class="btn btn-primary" >Submit</button>
                        </div>
                    </div>

                </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpdateForm;
  
