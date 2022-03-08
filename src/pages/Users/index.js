import React from 'react';
import './styles.css';
import AddUsers from '../addusers';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetchUSers()
    },[]);

    const fetchUSers = async() => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allusers');
            console.log(response)
            setUsers(response.data)

        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            
           <div className="ui centered grid vertical fluid menu" id="users-menu">

                    <div className="ui vertical animated button" tabindex="0">
                        <div className="visible content "> Display Users </div>
                        <div className="hidden content ">Mostrar Usuarios</div>
                    </div>
                    <div className="ui vertical animated button" tabindex="0">
                        <div className="hidden content">Adicionar Usuarios</div>
                        <div className="visible content">   Add Users     </div>
                    </div>
                    <div className="ui vertical animated button" tabindex="0">
                        <div className="hidden content"> Modificar Usuarios </div>
                        <div className="visible content">Update Users</div>
                    </div>

            </div>
        </>
    );
}

export default Users;
