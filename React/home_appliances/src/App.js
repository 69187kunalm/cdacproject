import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Rform } from './Component/User/RForm';
import { LForm } from './Component/User/LForm';


function App() {
  return (
    <div>
      <Routes>
       <Route path='/register' element={<Rform/>}></Route>
       <Route path='/login' element={<LForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
