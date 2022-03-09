
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import React from 'react';
import Nav from './components/Nav';
import Users from './pages/Users';
import AddUsers from './pages/addusers';
import DisplayUsers from './pages/displayUsers/displayusers';
import UpdateUsers from './pages/updateusers';
import DeleteUsers from './pages/deleteusers';


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        
      {/* <Route path='login' element={<Login/>} /> */}
      <Route path='users' element={<Users/>}/>
      <Route path='users/AddUsers' element={<AddUsers/>}/>
      <Route path='/DisplayUsers' element={<DisplayUsers/>}/>
      <Route path='/AddUsers' element={<AddUsers/>}/>
      <Route path='/UpdateUsers' element={<UpdateUsers/>}/>
      <Route path='/DeleteUsers' element={<DeleteUsers/>}/>


      </Routes>
    </div>
  );
}

export default App;