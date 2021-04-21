import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Menu from './components/Menu';

import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';

import { createGlobalStyle } from 'styled-components'

import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    overflow-x: hidden;
    background-color: #eee;
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    position: relative;
    min-height: 100vh;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
  }
`

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <Menu />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={HomePage} />
              <Route path="/shop/sale"><ShopPage value='onSale' /></Route>
              <Route path="/shop/men"><ShopPage value='m' /></Route>
              <Route path="/shop/women"><ShopPage value='f' /></Route>
              <Route path="/contact" component={ContactPage} />
              <Route path="/cart" component={CartPage} />
              <Route component={ErrorPage} />
            </Switch>
          </AnimatePresence>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
