import React from 'react';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayUsers from '../displayUsers/displayusers';
import AddUsers from '../addusers';
import { useNavigate } from 'react-router-dom';
import UpdateUsers from '../updateusers';
import DeleteUsers from '../deleteusers';

const Users = () => {
    const [users, setUsers] = useState([]);
    const navigateTo = useNavigate();
    useEffect(() => {
        fetchUSers()
    }, []);

    const fetchUSers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allusers');
            console.log(response)
            setUsers(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='mx-auto border p-2 m-2' >
            <div className="ui centered grid menu stackable mx-auto border p-2 m-2" id="users-menu">
                <div className="row">
                    <div className="ui four wide column vertical animated button" id="button-align" tabindex="0" onClick={() => navigateTo('/DisplayUsers')}>
                        <div className="visible content">Display Users</div>
                        <div className="hidden content">Mostrar Usuarios</div>
                    </div>
                </div>
                <div className="row">
                    <div className="ui four wide column vertical animated button" id="button-center" tabindex="0" onClick={() => navigateTo('/addUsers')}>
                        <div className="hidden content">Adicionar Usuarios</div>
                        <div className="visible content">   Add Users     </div>
                    </div>
                </div>
                <div className="row">

                    <div className="ui four wide column vertical animated button" id="button-id" tabindex="0" onClick={() => navigateTo('/updateusers')}>
                        <div className="hidden content"> Modificar Usuarios </div>
                        <div className="visible content">Update Users</div>
                    </div>
                </div>

                <div className="row">
                    <div className="ui four wide column vertical animated button" id="button-id" tabindex="0" onClick={() => navigateTo('/deleteusers')}>
                        <div className="hidden content"> Borrar Usuarios </div>
                        <div className="visible content">Delete Users</div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Users;
