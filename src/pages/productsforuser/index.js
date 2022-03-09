import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const ProductsForUser = () => {


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
        <div>
            {/* Test of products for Users. */}

            {
                products.map(product => {
                    return (
                        <div className="ui cards">
                            <div className=" card">
                                <div className="content">
                                    <div className="ui small image">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IClMq2DpEnWSbBXCdjKF1gm_MmvbiYXQXA&usqp=CAU"></img>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className="header">{product.code}</div>
                                    <div className="description">
                                        {product.description}
                                    </div>
                                </div>
                                <div className="ui bottom attached button">
                                    <div>
                                        {/* <i className="add icon"></i> */}
                                        Add to Cart / Agregar Carro de compras
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

            {/* End of the Div */}
        </div>
    );
}

export default ProductsForUser;
