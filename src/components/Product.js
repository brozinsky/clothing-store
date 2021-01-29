import React, { useContext } from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Paper } from '@material-ui/core';
import { ProductsContext } from '../contexts/ProductsContext';


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
    position: relative;

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
}
.icon--sale{
  background: #FFB6B3;

}
.icon--new{
  background: #B3CDFF;

}
`

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

const Product = props => {
  const classes = useStyles();
  const [products, setProducts] = useContext(ProductsContext);


  function handleAddClick(e) {
    console.log(e.target.dataset.key)
    setProducts(prevProducts => [
      ...prevProducts, { id: 121, sex: 'm', name: 'Black track jacket', category: 'Jackets', price: 65, sale: 32, inCart: 1 },

    ])
  }

  return (
    <Container>
      <Paper elevation={0} >
        <div className="image-container">
          <img className="product-img" src={props.imgUrl} alt="Product" />
          <div className="icon icon--sale">-50%</div></div>
        <div className="container-info">
          <span className="category">{props.category}</span>
          <span className="name">{props.name}</span>
          <div className="container-row">
            <div className="container-price">
              <span className="price price--crossed">{props.price}</span>
              <span className="price price--sale">{props.sale}</span>
            </div>
            <Button
              data-key={props.id}
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleAddClick}
              startIcon={<AddShoppingCartIcon />}
            >
              Add
          </Button>
          </div>
        </div>
      </Paper>
    </Container >
  )
}

export default Product
