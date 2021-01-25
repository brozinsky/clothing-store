import React from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

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

`

const Menu = (props) => {

    return (
        <Nav>
            <div className="wrap">
                <NavLink exact to='/'><img className="logo" src={logo} alt="logo" /></NavLink>
                <div className="tabs">
                    <NavLink to='/shop'>Sale</NavLink>
                    <NavLink to='/shop'>Men</NavLink>
                    <NavLink to='/shop'>Women</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/cart'>
                        <ShoppingCartOutlinedIcon />
                        <span className="cart-qt">0</span>
                    </NavLink>
                </div>
            </div>
        </Nav>
    )
}

export default Menu;