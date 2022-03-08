import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const DisplayUsers = () => {

    const [users, setUsers] = useState([]);



    useEffect(() => {
        fetchUSers();
    }, []);

    const fetchUSers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allusers')
            console.log(response);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    console.log("this is the Users list :", users);

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Phone Number/Numero de Telefono</th>
                        <th>First Name/Nombre</th>
                        <th>Last Name/Apellido</th>
                        <th>Store Name/Nombre de la Tienda</th>
                        <th>Email Address/Correo Electronico</th>
                        <th>Password/Clave</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr>
                                    <td data-label="phone">{user.phone}</td>
                                    <td data-label="firstname">{user.firstname}</td>
                                    <td data-label="lastname">{user.lastname}</td>
                                    <td data-label="storename">{user.storename}</td>
                                    <td data-label="email">{user.email}</td>
                                    <td data-label="pwd">{user.pwd}</td>
                                    <td data-label=""></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default DisplayUsers;
