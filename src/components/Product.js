import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Paper } from '@material-ui/core'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 20px;
  flex-wrap: wrap;
  width: 16rem;

  .container-info{
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
  }

  .image-container{
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
  }

  .product-img{
    height: 15rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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

      &--crossed{
        text-decoration: line-through;
        font-size: 1.2rem;
        margin-right: 0.4rem;
      }

      &--sale{
        color: rgba(206, 67, 87, 0.66);
      }

  }
`

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Product = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={0} >
        <div className="image-container">
          <img className="product-img" src={props.imgUrl} alt="Product" />
          <div className="icon"></div></div>
        <div className="container-info">
          <span className="category">{props.category}</span>
          <span className="name">{props.name}</span>
          <div className="container-row">
            <div className="container-price">
              <span className="price price--crossed">{props.price}</span>
              <span className="price price--sale">{props.sale}</span>
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to cart
          </Button>
          </div>
        </div>
      </Paper>
    </Container>
  )
}

export default Product
