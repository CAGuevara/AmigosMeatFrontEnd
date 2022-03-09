import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css'

const DisplayProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allproducts')
            console.log(response);
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Product-Div">
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th className="ui center aligned header">Image / Imagen</th>
                        <th className="ui center aligned header">Code / Codigo</th>
                        <th className="ui center aligned header">Name / Nombre</th>
                        <th className="ui center aligned header" >Price per Lb/Precio por Libra</th>
                        <th className="ui center aligned header">Qty on Inventory / Cantidad en Inventorio</th>
                        {/* <th className="ui center aligned header">Password/Clave</th> */}
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (
                                <tr>
                                    <td data-label="image" className="ui center aligned">
                                        {(product.image == null ?
                                            <img className="ui middle aligned tiny image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IClMq2DpEnWSbBXCdjKF1gm_MmvbiYXQXA&usqp=CAU"></img>
                                            :
                                            <img className="ui middle aligned tiny image" src={product.image}></img>)}
                                    </td>
                                    <td data-label="code" className="ui center aligned">{product.code}</td>
                                    <td data-label="description" className="ui center aligned">{product.description}</td>
                                    <td data-label="cost" className="ui center aligned">$ {product.cost}</td>
                                    <td data-label="qty" className="ui center aligned">{product.qty}</td>
                                    {/* <td data-label="pwd" className="ui center aligned">{user.pwd}</td> */}
                                    {/* <td data-label=""></td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default DisplayProducts;
