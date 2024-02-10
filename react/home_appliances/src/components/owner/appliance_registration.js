
const AppForm = ()=>{
    return(
        <div>
            <div className="container mt-5  col-md-4 needs-validation pb-5 pt-5">
                <p>Enter appliance details to add</p>

                <label for="name" className="form-label">Name:</label>
                <input type="text" class="form-control" id="app_name" placeholder="Appliance Name"/>

                <div class="btn-group">

                    <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        --Select Category--
                    </button>
                    <ul class="dropdown-menu dropdown-menu-lg-end">
                        <li><button class="dropdown-item" type="button">Electronic</button></li>
                        <li><button class="dropdown-item" type="button">Furniture</button></li>
                        <li><button class="dropdown-item" type="button">Other</button></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default  AppForm;