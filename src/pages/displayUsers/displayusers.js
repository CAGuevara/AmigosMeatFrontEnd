import React from 'react';

const DisplayUsers = () => {
    return (
        <div>
            {/* Displaying my wonderful users */}
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
                    <tr>
                        <td data-label="phone">404-396-0400</td>
                        <td data-label="firstname">Sein</td>
                        <td data-label="lastname">Cruz</td>
                        <td data-label="storename">Amigos Meat</td>
                        <td data-label="email">sein07@live.com</td>
                        <td data-label="pwd">123</td>
                        <td data-label=""></td>
                    </tr>
                    <tr>
                        <td data-label="phone">404-396-0400</td>
                        <td data-label="firstname">Sein</td>
                        <td data-label="lastname">Cruz</td>
                        <td data-label="storename">Amigos Meat</td>
                        <td data-label="email">sein07@live.com</td>
                        <td data-label="pwd">123</td>
                        <td data-label=""></td>
                    </tr>
                    <tr>
                        <td data-label="phone">404-396-0400</td>
                        <td data-label="firstname">Sein</td>
                        <td data-label="lastname">Cruz</td>
                        <td data-label="storename">Amigos Meat</td>
                        <td data-label="email">sein07@live.com</td>
                        <td data-label="pwd">123</td>
                        <td data-label=""></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}

export default DisplayUsers;
