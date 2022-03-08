import React from 'react';
import App from '../../App'

const AddUsers = () => {
    return (
        <div>
            <form className="ui form">
                <br></br>
                <h4 className="ui dividing header">User Information / Informacion del Usuario</h4>
                <div className="ui form">
                    <div className="inline fields required field">
                        <label>Phone Number /Numero de Telefono </label>
                        <div className="field">
                            <input type="text" placeholder="xxx"></input>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="xxx"></input>
                        </div>
                        <div className="field">
                            <input type="text" placeholder="xxxx"></input>
                        </div>
                    </div>    
                </div>
                <h4 className="ui dividing header"></h4>

                <div className="field">
                    <label> Full Name / Nombre Completo </label>
                    <div className="two fields">
                        <div className="six wide field">
                            <input type="text" name="shipping[first-name]" placeholder="First Name/Nombre"></input>
                        </div>
                        <div className="six wide field">
                            <input type="text" name="shipping[last-name]" placeholder="Last Name/ Apellido"></input>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="fields">
                        <div className="four wide field">
                            <label>Store Name/ Nombre de la Tienda</label>
                            <input type="text" name="shipping[first-name]" placeholder="Store Name/Nombre de La tienda "></input>
                        </div>
                        <div className="four wide field">
                            <label>E-mail / Correo Electronico</label>
                            <input type="text" name="shipping[first-name]" placeholder="joe@schmoe.com"></input>
                        </div>
                        <div className="four wide field">
                            <label>Password / Clave</label>
                            <input type="text" name="shipping[first-name]" placeholder="Password/Clave"></input>
                        </div>
                    </div>
                </div>
                <div className="ui form success">
                    <div className="ui submit button">Submit</div>
                </div>

            </form>
        </div>
    );
}

export default AddUsers;
