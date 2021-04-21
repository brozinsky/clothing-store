import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../contexts/CartContext';
import MenuIcon from '@material-ui/icons/Menu';

import styled from "styled-components";

import logo from "../img/b_logo.svg";

const Menu = props => {
    const [cart,] = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    let cartNumber = cart.length;

    const burgerHandler = () => {
        setIsOpen(current => !current)
    }

    return (
        <Nav>
            <div className="wrap">
                <div className="menu-tab">
                    <NavLink exact to='/'>
                        <img className="logo"
                            src={logo} alt="logo" />
                    </NavLink>
                    <Burger onClick={burgerHandler} >
                        <MenuIcon />
                    </Burger>
                </div>

                <div className={isOpen ? 'tabs tabs-open' : 'tabs'}>
                    <NavLink onClick={burgerHandler} exact to='/shop/sale'>Sale</NavLink>
                    <NavLink onClick={burgerHandler} to='/shop/men'>Men</NavLink>
                    <NavLink onClick={burgerHandler} to='/shop/women'>Women</NavLink>
                    <NavLink onClick={burgerHandler} to='/contact'>Contact</NavLink>
                    <NavLink onClick={burgerHandler} to='/cart'>
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

const Burger = styled.div`
width: 2rem;
font-size: 2.4rem;
margin-right: 1rem;
@media (min-width: 768px) {
display: none;
}
`
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
    @media (max-width: 768px) {
        flex-direction: column;
      }
}

.menu-tab{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logo{
    width: 18rem;
    height: 3rem;
}
.tabs-open{
    @media (max-width: 768px) {
    transform: translateX(0) !important;
}
}
.tabs{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 3rem;
    flex-wrap: nowrap;
    @media (max-width: 768px) {
        transform: translateX(-100vw);
        flex-direction: column;
        height: 100vh;
        margin-top: -5px;
        width: 100vw;
        background: #fff;
        justify-content: space-around;
        font-size: 1.3rem;
        transition: 0.25s;
      }
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

export default Menu;