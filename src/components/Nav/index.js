import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>

            <div className="ui secondary pointing menu">
                {/* <Link className="item">
                    Home/Inicio
                </Link>
                <Link className="item">
                    Products/Productos
                </Link> */}
                <Link className="item" to="users">
                    
                    Users/Usuarios


                 </Link>
                {/* <div className="right menu">
                <Link className="ui item">
                        Cart/Carrito de Compras
                    </Link>
                    <Link className="ui item">
                        LogOut/Salir
                    </Link>
                </div> */}
            </div>
        </div>

    );
}

export default Nav;
