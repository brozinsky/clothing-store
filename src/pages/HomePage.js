import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Product from '../components/Product';
import Social from '../components/Social';

import Grid from '@material-ui/core/Grid';

import { ref } from "../firebase";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])

    const getProducts = () => {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setProducts(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    const newProducts = products.filter(product => (product.isNew === true))
        .map(product => (
            <Product
                key={product.itemId}
                id={product.itemId}
                name={product.name}
                category={product.category}
                price={product.price}
                sale={product.sale}
                imgUrl={product.imgUrl}
                isOnSale={product.isOnSale}
                isNew={product.isNew}
            />
        ))

    return (
        <>
            <Header />
            <Tabs />
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