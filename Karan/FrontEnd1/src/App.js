

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import User from "./Components/UserHomePage/User";
// import Cards from "./Components/UserHomePage/Cards";
// import AddCart from "./Components/UserHomePage/AddCart";
// import Admin from "./Components/AdminHomePage/Admin";
// import Owner from "./Components/OwnerHomePage/Owner";
// import OwnerForm from "./Components/OwnerHomePage/OwnerForm";
// import UpdateForm from "./Components/UserHomePage/UpdateForm";


// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/user" element={<User />} />
//         <Route path="/carts" element={<Cards />} />
//         <Route path="/addcart" element={<AddCart />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/owner" element={<Owner />} />
//         <Route path="ownerform" element={<OwnerForm />} />
//         <Route path="/updateform" element={<UpdateForm />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./Components/components/login";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/components/register";
import AdminHome from "./Components/components/admin/adminhome";
import UserHome from "./Components/components/user/userhome";
import OwnerHome from "./Components/components/owner/ownerhome";
import ProtectedRoutes from "./Components/components/ProtectedRoutes";
import OwnerForm from "./Components/components/owner/appliancereg";
import AdminApplianceTable from "./Components/components/admin/applianceverification";
import Location from "./Components/components/Location";
import AdminUserTable from "./Components/components/admin/AdminUserTable";
import UpdatePassword from "./Components/components/user/updatepassword";
import UpdateLocation from "./Components/components/updateLocation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/location" element={<Location />}></Route>

        <Route
          path="/adminhome"
          element={<ProtectedRoutes Component={AdminHome} />}
        />
        <Route
          path="/customerhome"
          element={<ProtectedRoutes Component={UserHome} />}
        />
        <Route
          path="/customerhome/updatepass"
          element={<ProtectedRoutes Component={UpdatePassword} />}
        />
       <Route
          path="/ownerhome/updatelocation"
          element={<ProtectedRoutes Component={UpdateLocation} />}
        /> 
        <Route
          path="/ownerhome"
          element={<ProtectedRoutes Component={OwnerHome} />}
        />
        <Route
          path="ownerhome/ownerform"
          element={<ProtectedRoutes Component={OwnerForm} />}
        />
        <Route
          path="adminhome/adminappliancetable"
          element={<ProtectedRoutes Component={AdminApplianceTable} />}
        />
        <Route
          path="adminhome/adminusertable"
          element={<ProtectedRoutes Component={AdminUserTable} />}
        />
      </Routes>
    </div>
  );
}

export default App;

