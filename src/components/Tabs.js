import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import menTab from "../img/tab-men.png";
import womenTab from "../img/tab-women.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 1200px;
  margin-bottom: 50px;

  .tab{
      width: 50%;
      height: 500px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
  }

  .title{
    text-transform: uppercase;
    text-align: left;
    font-size: 2.6rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin-bottom: 1.4rem;

  }

  .title-thin{
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 0.05rem;
  }

  .container-1{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 10%;
    top: 40%;
    justify-content: right;
  }

  .container-2{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    top: 40%;
    justify-content: left;
  }
`

const Stripes = styled.div`
      position: relative;
      width: 80vw;
      height: 10px;
      background-color: #3396C6;
      margin-bottom: 50px;


      &:before{
        content: '';
        position: absolute;
        top: -23px;
        left: 0;
        width: 100vw;
        height: 10px;
        background-color: #3396C6;
        overflow: hidden;

      }

      &:after{
        content: '';
        position: absolute;
        top: 23px;
        left: 0;
        width: 100vw;
        height: 10px;
        background-color: #3396C6;
        overflow: hidden;

      }
`

const useStyles = makeStyles((theme) => ({
    button: {
        background: '#3396C6',
        borderRadius: '10px',
        margin: theme.spacing(1),
        '&:hover': {
            background: "#1373B4",
        },
    },
}));


const Tabs = (props) => {
    const classes = useStyles();

    return (
        <>
            <Container >
                <div className="tab tab-1" style={{
                    backgroundImage: `url(${womenTab})`
                }} >
                    <div className="container-1">
                        <h2 className="title">{props.name1}
                            <br />
                            <span className="title-thin"> Collection</span>
                        </h2>
                        <NavLink to='/shop/women'>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"

                            >
                                Shop now
                </Button>
                        </NavLink>
                    </div>
                </div>

                <div className="tab tab-2" style={{
                    backgroundImage: `url(${menTab})`
                }} >
                    <div className="container-2">
                        <h2 className="title">{props.name2}
                            <br />
                            <span className="title-thin"> Collection</span>
                        </h2>
                        <NavLink to='/shop/men'>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Shop now
                </Button>
                        </NavLink>
                    </div>

                </div>
            </Container >
            <Stripes />
        </>
    )
}


export default Tabs;


