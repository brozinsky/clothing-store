import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from "styled-components";
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';
import ProductInCart from '../components/ProductInCart';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
    table: {
        maxWidth: 700,
        margin: '1rem auto',
    },
    tableContainer: {
        maxWidth: 800,
    },
    summary: {
        width: '25rem',
        marginLeft: '3rem',
    },
    paper: {
        margin: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
    },
    button: {
        width: '100%',
    },
});

const CartPage = () => {
    const classes = useStyles();
    const [cart,] = useContext(CartContext);
    const [shipping, setShipping] = useState(4);
    const cost = cart.reduce((acc, curr) => acc + curr.price, 0);

    const handleChange = (e) => {
        setShipping(e.target.value);
    };

    return (
        <>
            <Wrapper
                variants={pageAnimation}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <Title>My cart</Title>
                <div className="container">
                    <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product details</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.length <= 0 ?
                                    <Empty>Your cart is empty</Empty >
                                    :
                                    cart.map((item, i) => (
                                        <ProductInCart
                                            key={i}
                                            id={item.id}
                                            name={item.name}
                                            url={item.url}
                                            price={item.price} />))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <SummaryContainer>
                        <Paper className={classes.paper}>
                            <Summary>Order summary</Summary>
                            <hr />
                            <Item>Items: {cart.length}</Item>
                            <Sum>Cost: ${cost}</Sum>
                            <hr />
                            <FormWrap>
                                <FormControl >
                                    <InputLabel
                                        shrink id="demo-simple-select-placeholder-label-label">
                                        Shipping
                                </InputLabel>
                                    <Select onChange={handleChange}
                                        defaultValue={4}
                                    >
                                        <MenuItem value={4}><em>Standard: $4</em></MenuItem>
                                        <MenuItem value={2}>Cheap: $2</MenuItem>
                                        <MenuItem value={8}>Premium: $8</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormWrap>
                            <Sum>Shipping: <span>${shipping}</span></Sum>
                            <hr />
                            <Total>Total cost: <span>${cost + shipping}</span></Total>
                            <Button className={classes.button}
                                variant="contained"
                                color="primary">
                                Checkout
                        </Button>
                        </Paper>
                    </SummaryContainer>
                </div>
            </Wrapper>
            <Footer />
        </>

    );
}

const Wrapper = styled(motion.div)`
margin: 0 auto;
max-width: 1200px;
padding-top: 5rem;
@media (max-width: 768px) {
    padding-bottom: 10rem;
}

.container{
    padding-bottom: 25rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 768px) {
    width: 100vw;
}
}

.details-img{
    height: 100px;
@media (max-width: 768px) {
display: none;}
}
.details-wrap{
    display: flex;
    flex-direction: row;
}

.details-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1.4rem;
}
.name-container{
    display: flex;
    flex-direction: column;
}
.details-name{
    font-size: 1.4rem;
}

.details-delete{
    width: 7rem;
    flex-grow: none;
    cursor: pointer;
    padding-right: 0.5rem;
    background: none;
    border: none;
&:active{
    border: 1px #000 solid;
}
&>svg {
  vertical-align: middle;
  scale: 0.6;
}
}

`
const SummaryContainer = styled.div`
margin: 0 auto;
`
const Title = styled.h2`
text-align: center;
margin: 1rem 0 2rem 0;
font-size: 2rem;
font-weight: 300;
text-transform: uppercase;
width: 100%;
`
const Empty = styled.p`
text-align: center;
margin: 2rem 0 ;
width: 100%;
font-size: 1.3rem;
font-weight: 300;
`
const Total = styled.h4`
text-align: center;
margin: 1rem 0 ;
font-size: 1.4rem;
font-weight: 400;
text-transform: uppercase;
`
const Item = styled.h5`
text-align: center;
margin: 1rem 0;
font-size: 1rem;
font-weight: 400;
width: 100%;
`
const Sum = styled.h5`
text-align: center;
margin: 1rem 0;
font-size: 1rem;
font-weight: 500;
width: 100%;
`
const Summary = styled.h4`
margin-bottom: 1rem;
text-transform: uppercase;
font-size: 1.4rem;
font-weight: 400;
text-align: center;
`
const FormWrap = styled.div`
text-align: center;
margin: 0 auto;
margin-top: 1rem;
font-size: 1.2rem;
font-weight: 400;
`


export default CartPage;