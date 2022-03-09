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

            {
                products.map(product => {
                    return (
                        <div className="ui items">
                            <div className="item">
                                <div className="ui small image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IClMq2DpEnWSbBXCdjKF1gm_MmvbiYXQXA&usqp=CAU"></img>
                                </div>
                                <div className="content">
                                    <div className="header">{product.description}</div>
                                    <div className="meta">
                                        <span className="stay">Code / Codigo : {product.code}</span>
                                        <br></br>
                                        <br></br>
                                        <span className="price">Price / Precio : ${product.cost} per lb</span>
                                        <br></br>
                                        <br></br>
                                        <span className="qtyStock">Quantity Available / Cantidad Disponible: {product.qty} Cases/Cajas </span>                                    
                                    </div>
                                    <div className="description">
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }






        </div>
    );
}

export default DisplayProducts;
