

const ApplianceRegister = () => {
    return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center">
                <h2 className="text-left mb-4">Appliance Register</h2>
                <div className="col-md-12 text-center bg-light p-4" >    
                    <form>

                        <div className="mb-3 row">
                            <label for="applianceType" className="col-sm-4 col-form-label text-center">Appliance Category:</label>
                            <div className="col-sm-8">
                                <select className="form-control" id="applianceType">
                                    <option value="ele">Electronics</option>
                                    <option value="fur">Furniture</option>
                                </select>
                            </div>
                        </div>

                        
                        <div className="mb-3 row">
                            <label for="name" class="col-sm-4 col-form-label text-center">Appliance Name :</label>
                            <div className="col-sm-8">
                                <input type="text" class="form-control" id="name"/>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="desc" class="col-sm-4 col-form-label text-center">Appliance Description</label>
                            <div className="col-sm-8">
                                <textarea class="form-control" id="desc" ></textarea>
                            </div>
                        </div>
                    
                        <div className="mb-3 row">
                                <label htmlFor="image" className="col-sm-4 col-form-label text-center">Appliance Image:</label>
                                <div className="col-sm-8">
                                    <input type="file" className="form-control" id="image" />
                                </div>
                        </div>

                        
                        <div class="input-group mb-3">
                            <label htmlFor="price" className="col-sm-4 col-form-label text-center">Price per month:</label>
                            <div class="input-group-prepend" >
                                <span class="input-group-text">₹</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-sm-12 col-form-label text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    
                    
                    

                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ApplianceRegister;
       