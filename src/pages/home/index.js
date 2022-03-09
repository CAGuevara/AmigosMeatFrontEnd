import React from 'react';
import './styles.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';


const Home = () => {
    const [username, setUserName] = useState('')
    const navigate = useNavigate()

    const handleChange = e => {
        setUserName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // setUser(username)
        //redirect user to the Character List 
        navigate('/')
    }
    return (
        <div className="first-div">
            <form className='mx-auto border p-2 m-2' id="login-form"
                onSubmit={handleSubmit}
            >

            <h1>General Meat and Groceries Company</h1>
            <h2>Welcome / Bienvenidos </h2>
            <img className="ui big aligned large image" src="https://storage.googleapis.com/wzukusers/user-17932168/images/56c5e8e0c148aIr2AZmj/GM-Logo_d200.jpg" alt="" />
            <h3 id="reg-note">Sign in you will have access to review and purchase our products</h3>
            <h3 id="reg-note"> Inicie su sesion para revisar y comprar nuestros productos</h3>

                <div className="mb-3">
                    {/* <div id="userHelp" className="form-text">Type your User Name and Password.</div> */}
                    <label htmlFor="exampleInputUser1"
                        className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputUser1"
                        aria-describedby="userHelp"
                        // value={username}
                        onChange={handleChange}
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>



        </div>
    );
}

export default Home;
