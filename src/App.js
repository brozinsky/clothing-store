import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';

import { createGlobalStyle } from 'styled-components'


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
    font-weight: 400;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/cart" component={CartPage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
