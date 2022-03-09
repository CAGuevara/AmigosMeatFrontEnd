
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
import Products from './pages/Products';
import Cart from './pages/Cart';
import DisplayProducts from './pages/displayproducts';
import ProductsForUser from './pages/productsforuser';
import Home from './pages/home';


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='login' element={<Login/>} /> */}
      <Route path='users' element={<Users/>}/>
      <Route path='users/AddUsers' element={<AddUsers/>}/>
      <Route path='/DisplayUsers' element={<DisplayUsers/>}/>
      <Route path='/AddUsers' element={<AddUsers/>}/>
      <Route path='/UpdateUsers' element={<UpdateUsers/>}/>
      <Route path='/DeleteUsers' element={<DeleteUsers/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='/DisplayProducts' element={<DisplayProducts/>}/>
      <Route path='ProductsForUser' element={<ProductsForUser/>}/>


      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>




      </Routes>
    </div>
  );
}

export default App;