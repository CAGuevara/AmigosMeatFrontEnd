
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import React from 'react';
import Nav from './components/Nav';
import Users from './pages/Users';
import AddUsers from './pages/addusers';
import DisplayUsers from './pages/displayUsers/displayusers';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        
      {/* <Route path='login' element={<Login/>} /> */}
      <Route path='users' element={<Users/>}/>
      <Route path='users/AddUsers' element={<AddUsers/>}/>
      <Route path='users/DisplayUsers' element={<DisplayUsers/>}/>

      </Routes>
    </div>
  );
}

export default App;