import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const DeleteUsers = () => {
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

    const deleteUser = async(phone)=> {
        try{
            const response = await axios.delete(`http://localhost:8080/api/v1/users/${phone}`)
            fetchUsers()
        }catch (error){
            console.log(error);
        }
    }

    // console.log("this is the Users list :", users);

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th className="ui center aligned header">Phone Number / Numero de Telefono</th>
                        <th className="ui center aligned header">First Name / Nombre</th>
                        <th className="ui center aligned header">Last Name / Apellido</th>
                        <th className="ui center aligned header" >Store Name / Nombre de la Tienda</th>
                        <th className="ui center aligned header">Email Address / Correo Electronico</th>
                        {/* <th className="ui center aligned header">Password/Clave</th> */}
                        <th className="ui center aligned header"> Delete / Borrar </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr>
                                    <td data-label="phone" className="ui center aligned">{user.phone}</td>
                                    <td data-label="firstname" className="ui center aligned">{user.firstname}</td>
                                    <td data-label="lastname" className="ui center aligned">{user.lastname}</td>
                                    <td data-label="storename" className="ui center aligned">{user.storename}</td>
                                    <td data-label="email" className="ui center aligned">{user.email}</td>
                                    {/* <td data-label="pwd" className="ui center aligned">{user.pwd}</td> */}
                                    <td className=" ui center aligned">
                                        <div className="ui vertical animated button" tabindex="0" onClick={()=>deleteUser(user.phone)}>
                                            <div className="hidden content"> Borrar Usuario </div>
                                            <div className="visible content">Delete User</div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default DeleteUsers;
