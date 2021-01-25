import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

import Product from '../components/Product';
import Filter from '../components/Filter';

import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

const Wrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
padding-top: 5rem;
padding-bottom: 25rem;
`

const ShopPage = () => {
    const [products, setProducts] = useContext(ProductsContext);

    return (
        <>
            <Wrapper>
                <Filter />
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
            </Wrapper>
        </>
    );

}

export default ShopPage;