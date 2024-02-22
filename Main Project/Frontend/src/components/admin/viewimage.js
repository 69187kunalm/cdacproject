import { Link } from "react-router-dom";

const ViewImg = ()=>{
    return(
        <div>
            <div class="text-center">
                <img src={localStorage.getItem('imageurl')} class="rounded" width={500} height={500}/>
                <div>
                    <Link to={'/admin/appiancerequest'}> Go Back</Link>
                </div>
            </div>

        </div>
    )
}

export default ViewImg;