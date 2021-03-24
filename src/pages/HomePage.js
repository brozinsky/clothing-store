import React, { useContext } from 'react';
import styled from "styled-components";

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
    const [products] = useContext(ProductsContext);

    const newProducts = products
        .filter(product => (product.isNew === true))
        .map(product => (
            <Product
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                sale={product.sale}
                imgUrl={product.imgUrl}
                isOnSale={product.isOnSale}
                isNew={product.isNew}
            />
        ));

    return (
        <>
            <Header />
            <Tabs name1={tabs[0].name} name2={tabs[1].name} />
            <NewProductsSection>
                <NewTitle>Check our <span>newest</span> products:</NewTitle>
                <Grid item sm={12}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    {newProducts}
                </Grid>
            </NewProductsSection>
            <Social />
        </>
    );
}

const NewProductsSection = styled.section`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 1200px;
`
const NewTitle = styled.h2`
text-align: center;
margin: 1rem 0 2rem 0;
font-size: 2rem;
font-weight: 300;
text-transform: uppercase;

& span{
    color: #3396C6;
    font-weight: 500;
}
`


export default HomePage;