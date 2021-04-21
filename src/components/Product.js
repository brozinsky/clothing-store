import React, { useContext } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Paper } from '@material-ui/core';
import { CartContext } from '../contexts/CartContext';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#18A0FB',
    borderRadius: '50px',
    margin: theme.spacing(1),
    '&:hover': {
      background: "#1373B4",
    },
  },
}));

const Product = ({ category, imgUrl, name, price, sale, id, isOnSale, isNew }) => {
  const classes = useStyles();
  const [, setCart] = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id: id,
      name: name,
      price: price,
      url: imgUrl,
    }
    setCart(
      prevState => [...prevState, product]
    )
  }

  return (
    <Container>
      <Paper elevation={0} >
        <div className="image-container">
          <img className="product-img" src={imgUrl} alt="Product" />
          <div
            className={
              isOnSale ? 'icon icon--sale' : ''
                || isNew ? 'icon icon--new' : ''}>
            {isNew ? 'New' : null || isOnSale ? `-${sale}%` : null} </div>
        </div>
        <div className="container-info">
          <span className="category">{category}</span>
          <span className="name">{name}</span>
          <div className="container-row">
            <div className="container-price">
              <span className={
                isOnSale ? 'price price--crossed' : 'price'}>${price}</span>
              {isOnSale ? <span className="price price--sale">${price * sale / 100}</span> : null}
            </div>
            <Button
              data-key={id}
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleAddToCart}
              startIcon={<AddShoppingCartIcon />}
            >Add</Button>
          </div>
        </div>
      </Paper>
    </Container >
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 16rem;

  @media (max-width: 768px) {
    width: 38vw;
  }

  .container-info{
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
  }

  .image-container{
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    position: relative;
  }

  .product-img{
    height: 15rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      height: 35vw;
  }
  }

  .category{
    color: #bbb;
    margin: 0.2rem;
    margin-left: 1rem;
  }
  .name{
    text-align: center;
    font-size: 1.6rem;
    margin: 0.1rem;
    @media (max-width: 768px) {
      font-size: 1rem;
  }
  }

  .container-row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0.1rem;
  }

  .price{
    font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

      &--crossed{
        text-decoration: line-through;
        font-size: 1.2rem;
        margin-right: 0.4rem;

        @media (max-width: 768px) {
          font-size: 0.8rem;
          margin-right: 0.1rem;
        }
      }

      &--sale{
        color: rgba(206, 67, 87, 0.66);
      }

  }
.icon{
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.2rem;
    text-align: center;
    color: #fff;
    letter-spacing: 0.05rem;
    font-weight: 500;
    width: 3rem;
    border-radius: 50%;
    font-family: 'Satisfy', 'Helvetica Neue';

    @media (max-width: 768px) {
      height: 2rem;
      width: 2rem;
      line-height: 2.1rem;
      font-size: 0.8rem;
    }
}
.icon--sale{
  background: #FFB6B3;

}
.icon--new{
  background: #B3CDFF;
}
`

export default Product