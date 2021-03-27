import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

import Product from '../components/Product';
import Filter from '../components/Filter';

import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const ShopPage = props => {
    const [products] = useContext(ProductsContext);

    const renderedProducts = products
        .filter(product => (product.sex === props.value
            || (product.sex === null && props.value !== 'onSale'))
            || (props.value === 'onSale' && product.isOnSale === true))
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
            <motion.div
                variants={pageAnimation}
                initial='initial'
                animate='animate'>
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