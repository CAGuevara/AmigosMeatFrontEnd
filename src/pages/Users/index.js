import React from 'react';
import './styles.css';
import AddUsers from '../addusers';


const Users = () => {
    return (
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
    );
}

export default Users;
