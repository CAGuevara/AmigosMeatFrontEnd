import React from 'react';
// import App from '../../App'
import { useState } from 'react';
import axios from 'axios';
import './styles.css'

const AddUsers = () => {
    const [phoneUser, setPhoneUser] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [storeName, setStoreName] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [pwdUser, setPwdUser] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
     try {
        const newUser = {
            phone : phoneUser,
            firstname : firstName,
            lastname : lastName,
            storename : storeName,
            email : emailUser,
            pwd : pwdUser
        }
 
            const response = await axios.post('http://localhost:8080/api/v1/adduser', newUser);
       
            }catch (error){
            console.log(error);
        }
    }
   

    return (
        <div>
            <form className="ui form" id="form-padding">
                <br></br>
                <h4 className="ui dividing header">User Information / Informacion del Usuario</h4>
                <div className="ui form">
                    <div className="inline fields required field">
                        <label>Phone Number /Numero de Telefono </label>
                        <div className="field">
                            <input type="text" 
                            name = "phone"
                            placeholder="xxx-xxx-xxxx"
                            onChange={e => setPhoneUser(e.target.value)}
                            ></input>
                        </div>
                       
                    </div>    
                </div>
                <h4 className="ui dividing header"></h4>

                <div className="field">
                    <label> Full Name / Nombre Completo </label>
                    <div className="two fields">
                        <div className="six wide field">
                            <input type="text" 
                                name="first-name" 
                                placeholder="First Name/Nombre"
                                onChange={e => setFirstName(e.target.value)}>
                            </input>
                        </div>
                        <div className="six wide field">
                            <input type="text" 
                            name="last-name" 
                            placeholder="Last Name/ Apellido"
                            onChange={e => setLastName(e.target.value)}>
                            </input>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="fields">
                        <div className="four wide field">
                            <label>Store Name/ Nombre de la Tienda</label>
                            <input type="text" 
                                name="store-name" 
                                placeholder="Store Name/Nombre de La tienda "
                                onChange={e => setStoreName(e.target.value)}
                                ></input>
                        </div>
                        <div className="four wide field">
                            <label>E-mail / Correo Electronico</label>
                            <input type="text" 
                            name="email" 
                            placeholder="joe@schmoe.com"
                            onChange={e => setEmailUser(e.target.value)}
                            ></input>
                        </div>
                        <div className="four wide field">
                            <label>Password / Clave</label>
                            <input type="text" 
                            name="pwd" 
                            placeholder="Password/Clave"
                            onChange={e => setPwdUser(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="ui form success">
                    <button className="ui button" type="submit">Submit</button>
                    {/* <div className="ui submit button">Submit</div> */}
                </div>

            </form>
        </div>
    );
}

export default AddUsers;
