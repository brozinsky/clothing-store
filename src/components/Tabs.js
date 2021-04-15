import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

import StripesThin from "./svg/StripesThin";

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

const Tabs = () => {
    const classes = useStyles();

    return (
        <>
            <Container >
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.7,
                        ease: 'linear'
                    }}
                    className="tab tab-1" style={
                        {
                            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/clothing-store-402a8.appspot.com/o/tab-women.png?alt=media&token=d04ba1ec-5373-452a-a787-ee4756d536bd)`
                        }} >
                    <div className="container-1">
                        <motion.h2
                            initial={{
                                y: -20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.7,
                                duration: 0.4,
                                ease: 'linear'
                            }}
                            className="title">Women's
                            <br />
                            <span className="title-thin"> Collection</span>
                        </motion.h2>
                        <NavLink to='/shop/women'>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"

                            >Shop now</Button>
                        </NavLink>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0,
                        duration: 0.7,
                        ease: 'linear'
                    }}
                    className="tab tab-2" style={{
                        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/clothing-store-402a8.appspot.com/o/tab-men.png?alt=media&token=3c30e116-e684-4392-afc8-4bc309d3a40e)`
                    }} >
                    <div className="container-2">
                        <motion.h2
                            initial={{
                                y: -20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.7,
                                duration: 0.4,
                                ease: 'linear'
                            }}
                            className="title">Men's
                            <br />
                            <span className="title-thin"> Collection</span>
                        </motion.h2>
                        <NavLink to='/shop/men'>
                            <Button
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                size="large"
                            >Shop now</Button>
                        </NavLink>
                    </div>
                </motion.div>
            </Container >
            <StripesThin />
        </>
    )
}

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

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .tab{
      width: 50%;
      height: 500px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;

      @media (max-width: 768px) {
        width: 100vw;
        height: 13rem;
    }
  }

  .title{
    text-transform: uppercase;
    text-align: left;
    font-size: 2.6rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin-bottom: 1.4rem;

    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 2.2rem;
        margin-bottom: 0.5rem;
    }
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
    @media (max-width: 768px) {
        top: 30%;
    }
  }

  .container-2{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    top: 40%;
    justify-content: left;
    @media (max-width: 768px) {
        top: 30%;
    }
  }
`

export default Tabs;