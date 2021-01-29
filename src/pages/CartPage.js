import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import styled from "styled-components";

import jacket1 from "../img/jackets/m__black-track-jacket.png";


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    summary: {
        width: '25rem',
        marginLeft: '3rem',
    }
});

function createData(name, url, size, quantity, price, total) {
    return { name, url, size, quantity, price, total };
}

const rows = [
    createData('Black track suit ', jacket1, 'M', 2, 6.0, 24.0),
    createData('Red Pants', jacket1, 'S', 1, 3.0, 3.0),
    createData('Slippers', jacket1, '42', 1, 3.0, 3.0),
];

const summary =
{
    id: 'summary',
    quantity: 2,
    total: 33,
};


const Wrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
padding-top: 5rem;

.container{
    padding-bottom: 25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.title{
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.7rem;
}
.summary{
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
}
.details-img{
    height: 100px;
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
.checkout-btn{
    margin: 0 auto;
    margin-top: 1rem;
}
`

const SummaryContainer = styled.div`
margin: 0 auto;
max-width: 1200px;
padding-top: 5rem;
`

const ContactPage = () => {
    const classes = useStyles();
    const [products, setProducts] = useContext(ProductsContext);

    return (
        <>
            <Wrapper>
                <div className="container">
                    <h1 className="title">My cart</h1>
                    <TableContainer component={Paper}>
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
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <div className="details-wrap">
                                                <img className="details-img" src={row.url} alt="product" />
                                                <div className="details-container">
                                                    <div className="name-container">
                                                        <span className="details-name">{row.name}</span>
                                                        <span>size: {row.size}</span></div>
                                                    <button className="details-delete"><DeleteIcon /> remove item</button>
                                                </div>
                                            </div>

                                        </TableCell>
                                        <TableCell align="right">{row.quantity}</TableCell>
                                        <TableCell align="right">${row.price}</TableCell>
                                        <TableCell align="right">${row.total}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <SummaryContainer>
                        <Paper>
                            <h3 className="summary">Order summary</h3>
                            <hr />
                            <span>Items: {summary.quantity}</span>
                            <span>Shipping</span>
                            <span>$12</span>
                            <FormControl>
                                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                                    Shipping
                                </InputLabel>
                                <Select
                                    defaultValue={4}
                                >
                                    <MenuItem value={4}><em>Standard</em></MenuItem>
                                    <MenuItem value={2}>Cheap</MenuItem>
                                    <MenuItem value={0}>Free</MenuItem>
                                </Select>
                            </FormControl>
                            <hr />
                            <span>Total cost</span>
                            <span>$12</span>
                            <Button
                                className="checkout-btn"
                                variant="contained"
                                color="primary">
                                Checkout
                        </Button>
                        </Paper>
                    </SummaryContainer>
                </div>
            </Wrapper>
        </>

    );
}

export default ContactPage;