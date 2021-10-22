import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";

const ProductsWrapper = styled.div`{
    width: 100%;
    height: 95vh;
    border: solid orange 1px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    
    h1 {
        margin: 0 auto;
    }
}`

const ProductWrapper = styled.div`{
    width: 500px;
    height: 300px;
    padding: 25px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    border: solid gray 1px;
}`

const Products = () => {
    const [ products, setProducts ] = useState( null );

    const getProducts = () => { axios.get('https://mintrepreneur-be.herokuapp.com/api/products' )
        .then( res => { setProducts( res.data.allProducts ) } )
        .catch( err => alert( err ) );
    }

    useEffect( () => { setTimeout( getProducts, 500 ) }, [] );

    return (
        <ProductsWrapper>
            <h1>Products</h1>
            { products && products.map( product => {
                    return (
                        <ProductWrapper
                            key = { product.id }
                        >
                            { product.title }
                        </ProductWrapper>
                    )
                })
            }
        </ProductsWrapper>
    );
}

export default Products;