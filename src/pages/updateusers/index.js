import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UpdateUsers = () => {
    const [phoneUser, setPhoneUser] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [storeName, setStoreName] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [pwdUser, setPwdUser] = useState('');

    const [userToEdit, setUserToEdit] = useState('');

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allusers')
            // console.log(response);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const findUser = async(phone)=> {
        try{
            const response = await axios.delete(`http://localhost:8080/api/v1/users/${phone}`)
            fetchUsers()
        }catch (error){
            console.log(error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = {
                phone: phoneUser,
                firstname: firstName,
                lastname: lastName,
                storename: storeName,
                email: emailUser,
                pwd: pwdUser
            }
            if ((phoneUser.length < 12) || (phoneUser.length > 12)) {
                return;
            }

            const response = await axios.put('http://localhost:8080/api/v1/adduser', newUser);
            // console.log(response);

            if (response.status === 200) {
                window.alert(`The User has been Added Succesfully / El Usuario ha sido agregado exitosamente`)
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <form className="ui form" id="form-padding" onSubmit={handleSubmit}>
                <br></br>
                <h4 className="ui dividing header">Enter the Phone Number of the User you wish to Update / Digite el Numero de Telefono del Usuario que Quiere Modificar</h4>
                <div className="ui form">
                    <div className="inline fields required field">
                        <label>Phone Number /Numero de Telefono </label>
                        <div className="field">
                            <input type="text"
                                name="phone"
                                placeholder="xxx-xxx-xxxx"
                                onChange={e => setPhoneUser(e.target.value)}
                            ></input>
                            <div className="ui vertical animated button" tabindex="0" onClick={findUser}>
                                <div className="hidden content"> Search User</div>
                                <div className="visible content">Buscar Usuario</div>
                            </div>
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

                {/* <div className="ui four wide column vertical animated button" id="button-id" tabindex="0" >
                    <div className="hidden content"> Actualizar</div>
                    <div className="visible content">Update</div>
                </div> */}

                <button className="ui button form success">
                    <div className="ui vertical animated button">
                        <div className="hidden content">Actualizar</div>
                        <div className="visible content">Update</div>
                    </div>
                </button>
            </form>
        </div>
    );
}

export default UpdateUsers
