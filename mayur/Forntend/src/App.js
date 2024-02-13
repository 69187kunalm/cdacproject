
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
        <Route path='ownerhome/ownerform'element={<ProtectedRoutes Component = {OwnerForm}/>}/>

      </Routes>
    </div>
  );
}

export default App;