import { Link } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";

const NavWrapper = styled.nav`{
    height: 5vh;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: antiquewhite;
}`;

const StyledLink  = styled( Link )`{
    color: #000;
    text-decoration: none;
    margin-right: 50px;
}`;

const Nav = () => {
    return (
        <NavWrapper>
            <StyledLink to="/"> All Products </StyledLink>
        </NavWrapper>
    );
}



export default  Nav;