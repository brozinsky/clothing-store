import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [inCart, setInCart] = useState([
    ]);


    return (
        <CartContext.Provider value={[inCart, setInCart]}>
            {props.children}
        </CartContext.Provider>
    );
}