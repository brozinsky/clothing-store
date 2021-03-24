import React, { useState, createContext } from 'react';

import jacket1 from "../img/jackets/m__black-track-jacket.png";
import jacket2 from "../img/jackets/m__black-training-jacket.png";
import jacket3 from "../img/jackets/m__red-training-jacket.png";
import jacket4 from "../img/jackets/w__red-track-jacket.png";
import jacket5 from "../img/jackets/w__blue-track-jacket.png";
import jacket6 from "../img/jackets/m__track-jacket.png";
import jacket7 from "../img/jackets/w__firebird-track-jacket.png";

import pants1 from "../img/pants/m__black-training-pants.png";
import pants2 from "../img/pants/m__blue-training-pants.png";
import pants3 from "../img/pants/w__black-joggers.png";
import pants4 from "../img/pants/w__black-track-pants.png";
import pants5 from "../img/pants/w__pink-joggers.png";
import pants6 from "../img/pants/w__red-track-pants.png";

import tshirt1 from "../img/tshirts/m_red-tshirt.jpg";

import shoes1 from "../img/shoes/w__superstar-sneakers.png";
import shoes2 from "../img/shoes/m__slides.png";

import hats1 from "../img/hats/m__black-flat-cap.png";
import hats2 from "../img/hats/m__black-leather-flat-cap.png";
import hats3 from "../img/hats/m__black-ushanka.png";

import other1 from "../img/other/fanny-pack-adi.png";
import other2 from "../img/other/fanny-pack-fila.png";
import other3 from "../img/other/fanny-pack-nike.png";

export const ProductsContext = createContext();

export const ProductsProvider = props => {
    const [products, setProducts] = useState([
        {
            id: 1, sex: 'm', name: 'Black track jacket',
            category: 'Jackets', price: 65, sale: null,
            imgUrl: jacket1, isNew: false,
            isOnSale: false
        },
        {
            id: 2, sex: 'm', name: 'Black training jacket',
            category: 'Jackets', price: 50, sale: 50,
            imgUrl: jacket2, isNew: false,
            isOnSale: true
        },
        {
            id: 3, sex: 'm', name: 'Red training jacket',
            category: 'Jackets', price: 50, sale: null,
            imgUrl: jacket3, isNew: true,
            isOnSale: false
        },
        {
            id: 4, sex: 'f', name: 'Red track jacket',
            category: 'Jackets', price: 75, sale: null,
            imgUrl: jacket4, isNew: true,
            isOnSale: false
        },
        {
            id: 5, sex: 'm', name: 'Blue track jacket',
            category: 'Jackets', price: 75, sale: null,
            imgUrl: jacket5, isNew: false,
            isOnSale: false
        },
        {
            id: 6, sex: 'm', name: 'Tricolor track jacket',
            category: 'Jackets', price: 80, sale: 50,
            imgUrl: jacket6, isNew: false,
            isOnSale: true
        },
        {
            id: 7, sex: 'f', name: 'Firebird jacket',
            category: 'Jackets', price: 80, sale: null,
            imgUrl: jacket7, isNew: true,
            isOnSale: false
        },

        {
            id: 11, sex: 'm', name: 'Black training pants',
            category: 'Pants', price: 65, sale: 50,
            imgUrl: pants1, isNew: false,
            isOnSale: true
        },
        {
            id: 12, sex: 'm', name: 'Blue training pants',
            category: 'Pants', price: 45, sale: null,
            imgUrl: pants2, isNew: true,
            isOnSale: false
        },
        {
            id: 13, sex: 'f', name: 'Black joggers',
            category: 'Pants', price: 40, sale: null,
            imgUrl: pants3, isNew: false,
            isOnSale: false
        },
        {
            id: 14, sex: 'f', name: 'Black Track pants',
            category: 'Pants', price: 45, sale: null,
            imgUrl: pants4, isNew: false,
            isOnSale: false
        },
        {
            id: 15, sex: 'f', name: 'Pink joggers',
            category: 'Pants', price: 40, sale: null,
            imgUrl: pants5, isNew: true,
            isOnSale: false
        },
        {
            id: 16, sex: 'f', name: 'Red Track pants',
            category: 'Pants', price: 45, sale: 25,
            imgUrl: pants6, isNew: false,
            isOnSale: true
        },

        {
            id: 21, sex: 'm', name: 'Red T-shirt',
            category: 'T-shirts', price: 24, sale: null,
            imgUrl: tshirt1, isNew: false,
            isOnSale: false
        },

        {
            id: 31, sex: 'f', name: 'Superstar sneakers',
            category: 'Shoes', price: '$85', sale: null,
            imgUrl: shoes1, isNew: false,
            isOnSale: false
        },
        {
            id: 32, sex: 'm', name: 'Slides',
            category: 'Shoes', price: 20, sale: 50,
            imgUrl: shoes2, isNew: false,
            isOnSale: true
        },

        {
            id: 41, sex: 'm', name: 'Black flat cap',
            category: 'Hats', price: 20, sale: 50,
            imgUrl: hats1, isNew: false,
            isOnSale: true
        },
        {
            id: 42, sex: 'm', name: 'Leather flat cap',
            category: 'Hats', price: 20, sale: null,
            imgUrl: hats2, isNew: false,
            isOnSale: false
        },
        {
            id: 43, sex: 'm', name: 'Ushanka',
            category: 'Hats', price: 20, sale: null,
            imgUrl: hats3, isNew: true,
            isOnSale: false
        },

        {
            id: 51, sex: null, name: 'Fanny pack - Adidas',
            category: 'Other', price: 20, sale: null,
            imgUrl: other1, isNew: false,
            isOnSale: false
        },
        {
            id: 52, sex: null, name: 'Fanny pack - Fila',
            category: 'Other', price: 20, sale: null,
            imgUrl: other2, isNew: false,
            isOnSale: false
        },
        {
            id: 53, sex: null, name: 'Fanny pack - Nike',
            category: 'Other', price: 20, sale: null,
            imgUrl: other3, isNew: false,
            isOnSale: false
        },

    ])

    return (
        <ProductsContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductsContext.Provider>


    );
}