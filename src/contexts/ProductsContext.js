import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
    const [products, setProducts] = useState([])

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    );
}