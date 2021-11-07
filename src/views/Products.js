import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import styled from "styled-components";

export const ProductsPageCtn = styled.div`{
    width: 100%;
    height: 95vh;
    border: solid orange 1px;
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    
    h1 {
        margin: 0 auto;
    }
}`;

export const ProductWrapper = styled.div`{
    width: 500px;
    height: 300px;
    padding: 25px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    border: solid gray 1px;
}`;

const Products = () => {
    const [ products, setProducts ] = useState( null );

    const getProducts = () => { axios.get('https://mintrepreneur-be.herokuapp.com/api/products' )
        .then( res => { setProducts( res.data.allProducts ) } )
        .catch( err => alert( err ) );
    }

    useEffect( () => { setTimeout( getProducts, 100 ) }, [] );

    useEffect(() => {
        const socket = io('http://localhost:4000')
        socket.on('welcome', (res) => {
            console.log(res);
        })
    }, []);

    return (
        <ProductsPageCtn>
            <h1>Products</h1>
            { products && products.map( product => {
                    return (
                        <Link to={{
                            pathname: `/product/${ product.id }`,
                            state: {
                                productClicked: product
                            }
                        }}>
                            <ProductWrapper
                                key = { product.id }
                            >
                                { product.title }
                            </ProductWrapper>
                        </Link>
                    )
                })
            }
        </ProductsPageCtn>
    );
}

export default Products;