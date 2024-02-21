
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/login';
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/register';
import AdminHome from './components/admin/adminhome';
import UserHome from './components/user/userhome';
import OwnerHome from './components/owner/ownerhome';
import ProtectedRoutes from './components/ProtectedRoutes';
import OwnerForm from './components/owner/appliancereg';
import AdminApplianceTable from './components/admin/applianceverification';
import ViewImg from './components/admin/viewimage';
import Location from './components/location/location';
import Cart from './components/user/viewcart';
import AdminUserTable from './components/admin/adminusertable';
import UpdatePassword from './components/owner/updatepassword';
import UpdatePasswordOwner from './components/owner/updatepassword';
import UpdatePasswordUser from './components/user/updatepassword';
import UpdateLocationUser from './components/user/updateLocationUser';
import Payment from './components/user/payments';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/register' element={<RegisterForm/>}></Route>

        <Route path='/adminhome' element={<ProtectedRoutes Component = {AdminHome}/>}/>
        <Route path='/customerhome'element={<ProtectedRoutes Component = {UserHome}/>}/>
        <Route path='/ownerhome'element={<ProtectedRoutes Component = {OwnerHome}/>}/>
        <Route path='/ownerhome/ownerform'element={<ProtectedRoutes Component = {OwnerForm}/>}/>
        <Route path='/admin/appiancerequest'element={<ProtectedRoutes Component = {AdminApplianceTable}/>}/>
        <Route path='/admin/viewimage'element={<ProtectedRoutes Component = {ViewImg}/>}/>
        <Route path='/register/location'element={<Location/>}/>
        <Route path='/user/cart'element={<ProtectedRoutes Component = {Cart}/>}></Route>
        <Route path='/admin/adminusertable'element={<ProtectedRoutes Component = {AdminUserTable}/>}></Route>
        <Route path='/ownerhome/updatepass'element={<ProtectedRoutes Component = {UpdatePasswordOwner}/>}></Route>
        <Route path='/userhome/updatepass'element={<ProtectedRoutes Component = {UpdatePasswordUser}/>}></Route>
        <Route path='/userhome/updatelocation'element={<ProtectedRoutes Component = {UpdateLocationUser}/>}></Route>
        <Route path='/userhome/payment'element={<ProtectedRoutes Component = {Payment}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
