import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const ProductPageCtn = styled.div`{
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;


const Product = () => {
    const location = useLocation()
    const product = location.state.productClicked;

    return (
        <ProductPageCtn>
            <h3>{ product ? product.title : "products" }</h3>
            <Link to={{
                pathname: `/add-review/${ product.id }`,
                state: {
                    productClicked: product
                }
            }}>
                Add Review
            </Link>
    </ProductPageCtn> );
}

export default Product;