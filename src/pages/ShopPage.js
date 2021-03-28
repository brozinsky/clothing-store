import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import { ref } from "../firebase";

import Product from '../components/Product';
import Filter from '../components/Filter';
import StripesBg1 from '../components/svg/StripesBg1';

import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const ShopPage = props => {

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
            console.log(items)
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    const renderedProducts = products
        .filter(product => (product.sex === props.value
            || (product.sex === null && props.value !== 'onSale'))
            || (props.value === 'onSale' && product.isOnsale === true))
        .map(product => (
            <Product
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                sale={product.sale}
                imgUrl={product.imgUrl}
                isOnSale={product.isOnsale}
                isNew={product.isNew}
            />
        ));

    return (
        <>
            <motion.div
                variants={pageAnimation}
                initial='initial'
                animate='animate'>
                <StripesBg1 />
                <Wrapper>
                    <Filter />
                    <Grid item sm={12}
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                    >
                        {renderedProducts}
                    </Grid>
                </Wrapper>
            </motion.div>
        </>
    );
}

const Wrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
padding-top: 5rem;
padding-bottom: 25rem;
`

export default ShopPage;