import React, { useContext } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { ProductsContext } from '../contexts/ProductsContext';


import styled from "styled-components";

import logo from "../img/b_logo.svg";


const Nav = styled.nav`
width: 100vw;
height: 3rem;
background: #fff;
position: fixed;
z-index: 1;
box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);

.wrap{
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.logo{
    width: 18rem;
    height: 3rem;
}
.tabs{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 3rem;
    flex-wrap: nowrap;
    &>a{
        padding: 0.3rem;
        margin-right: 2rem;
        list-style-type: none;
        text-decoration: none;
            text-transform: uppercase;
            color: #333;
            border-bottom: 2px solid #fff;
            transition: 0.2s;
            font-weight:400;
            &:hover{
                color: #18A0FB;
            }
    }
    &>a.active{
        border-bottom: 2px solid #18A0FB;
        color: #18A0FB;
    }
    }
.cart-qt{
    display:inline-block;
    height: 1.3rem;
    width: 1.3rem;
    line-height: 1.3rem;
    border-radius: 50%;
    background: #18A0FB;
    color: #fff;
    text-align: center;
}
.none{
    color: #000;
    background: #fff;
}
`

const Menu = props => {
    const [products, setProducts] = useContext(ProductsContext);

    let cartNumber = products.reduce((acc, curr) => acc + curr.inCart, 0);;

    return (
        <Nav>
            <div className="wrap">
                <NavLink exact to='/'><img className="logo" src={logo} alt="logo" /></NavLink>
                <div className="tabs">
                    <NavLink exact to='/shop/sale'>Sale</NavLink>
                    <NavLink to='/shop/men'>Men</NavLink>
                    <NavLink to='/shop/women'>Women</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/cart'>
                        <ShoppingCartOutlinedIcon
                            style={
                                cartNumber === 0 ?
                                    { color: '#000' } :
                                    { color: '#18A0FB' }
                            } />
                        <span className={cartNumber === 0 ?
                            "cart-qt none" : "cart-qt"} >{cartNumber}</span>
                    </NavLink>
                </div>
            </div>
        </Nav>
    )
}

export default Menu;