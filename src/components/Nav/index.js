import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>

            <div className="ui secondary pointing menu">
                <Link className="item" to ="/">
                    Home/Inicio
                </Link>
                <Link className="item" to="users">
                    Users / Usuarios
                </Link>
                <Link className="item" to="products">
                    Products / Productos
                </Link>


                <div className="right menu">

                <Link className="item" to="productsforuser">
                    Products for Sale/Productos para la venta
                </Link>
                    <Link className="ui item" to="cart">
                        Cart / Carro de Compras
                    </Link>
                    <Link className="ui item" to="login">
                        Login / Acceso
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Nav;
