import React, { useContext } from 'react';

import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Product from '../components/Product';
import Social from '../components/Social';
import { ProductsContext } from '../contexts/ProductsContext';

import Grid from '@material-ui/core/Grid';

import menTab from "../img/tab-men.png";
import womenTab from "../img/tab-women.png";

const tabs = [
    { id: 1, name: "Women's", imgUrl: womenTab },
    { id: 2, name: "Men's", imgUrl: menTab },
]

const HomePage = () => {
    const [products, setProducts] = useContext(ProductsContext);

    return (
        <>
            <Header />
            <Tabs name1={tabs[0].name} name2={tabs[1].name} />
            <Grid item sm={12}
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                {products.map((product) => (
                    <Product key={product.id} name={product.name} category={product.category} price={product.price} sale={product.sale} imgUrl={product.imgUrl} />
                ))}
            </Grid>
            <Social />
        </>
    );
}

export default HomePage;