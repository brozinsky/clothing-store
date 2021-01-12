import React, { Component } from 'react'

import Product from '../components/Product';

import Grid from '@material-ui/core/Grid';
import styled from "styled-components";

import pants1 from "../img/t-shirts/pants-adi-trefoil-red.jpg";

import jacket1 from "../img/jackets/m__black-track-jacket.png";
import jacket2 from "../img/jackets/m__black-training-jacket.png";
import jacket3 from "../img/jackets/m__red-training-jacket.png";
import jacket4 from "../img/jackets/w__blue-track-jacket.png";
import jacket5 from "../img/jackets/w__red-track-jacket.png";

const Wrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
`

const products = [
    { id: 1, sex: 'm', name: 'Black track jacket', category: 'Jackets', price: '$12', sale: '$10', imgUrl: jacket1 },
    { id: 2, sex: 'm', name: 'Black training jacket', category: 'Jackets', price: '$12', sale: '$10', imgUrl: jacket2 },
    { id: 3, sex: 'm', name: 'Red training jacket', category: 'Jackets', price: '$12', sale: '$10', imgUrl: jacket3 },
    { id: 4, sex: 'f', name: 'Red track jacket', category: 'Jackets', price: '$12', sale: '$10', imgUrl: jacket4 },
    { id: 5, sex: 'm', name: 'Red track jacket', category: 'Jackets', price: '$12', sale: '$10', imgUrl: jacket5 },

    { id: 6, name: 'T-shirt', category: 'T-shirts', price: '$12', sale: '$10', imgUrl: pants1 },
    { id: 7, name: 'T-shirt', category: 'T-shirts', price: '$12', sale: '$10', imgUrl: pants1 },
    { id: 8, name: 'T-shirt', category: 'T-shirts', price: '$12', sale: '$10', imgUrl: pants1 },
    { id: 9, name: 'T-shirt', category: 'T-shirts', price: '$12', sale: '$10', imgUrl: pants1 },
    { id: 10, name: 'T-shirt', category: 'T-shirts', price: '$12', sale: '$10', imgUrl: pants1 },
    { id: 11, name: 'T-shirt', category: 'T-shirts', price: '$12', sale: '$10', imgUrl: pants1 },

]

class ShopPage extends Component {
    state = {

    }
    render() {
        return (
            <>
                <Wrapper>
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
}

export default ShopPage;