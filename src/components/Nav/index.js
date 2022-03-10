import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import usercontext from '../../contexts/UserContext';
import Home from '../../pages/home';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const user = useContext(usercontext);
     const navigateTo = useNavigate();

    return (
        <div>
            {
                !user
                    ?
                    <>
                        {console.log("This is the users", user)}
                        <div className="right menu">
                            <Link className="item" to="productsforuser">
                                Products for Sale/Productos para la venta
                            </Link>
                            <Link className="ui item" to="cart">
                                Cart / Carro de Compras
                            </Link>
                            <Link className="ui item" onClick={() => navigateTo('/')} >
                                Logout / Salir
                            </Link>

                        </div>
                    </>
                    :
                    <>
                        <div className="ui secondary pointing menu">
                            {/* <Link className="item" to="/">
                                Home/Inicio
                            </Link> */}
                            <Link className="item" to="users">
                                Users / Usuarios
                            </Link>
                            <Link className="item" to="products">
                                Products / Productos
                            </Link>
                            <div className="right menu">
                                <Link className="ui item" to="/">
                                    Logout / Salir
                                </Link>

                            </div>
                        </div>
                    </>
            }

        </div>

    );
}

export default Nav;
