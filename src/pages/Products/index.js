import React from 'react';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DisplayProducts from '../displayproducts';

const Product = () => {
    
    const [product, setProduct] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        fetchProducts()
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allproducts');
            // console.log(response)
            setProduct(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="ui centered grid menu stackable" id="products-menu">
                <div className="row">
                    <div className="ui four wide column vertical animated button" id="prod-align" tabindex="0"onClick={() => navigateTo('/DisplayProducts')}>
                        <div className="visible content">Display Product</div>
                        <div className="hidden content">Mostrar Producto</div>
                    </div>
                </div>
                <div className="row">
                    <div className="ui four wide column vertical animated button" id="produ-center" tabindex="0">
                    {/* onClick={() => navigateTo('/addUsers')} */}
                        <div className="hidden content">Adicionar Producto</div>
                        <div className="visible content">Add Product</div>
                    </div>
                </div>
                <div className="row">

                    <div className="ui four wide column vertical animated button" id="prod-id" tabindex="0">
                    {/* onClick={() => navigateTo('/updateusers')} */}
                        <div className="hidden content"> Modificar Producto</div>
                        <div className="visible content">Update Product</div>
                    </div>
                </div>

                <div className="row">
                    <div className="ui four wide column vertical animated button" id="button-id" tabindex="0">
                    {/* onClick={() => navigateTo('/deleteusers')} */}
                        <div className="hidden content"> Borrar Producto</div>
                        <div className="visible content">Delete Product</div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Product;
