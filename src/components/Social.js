import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { fadeAnimation } from '../animation';
import { useScroll } from "../components//useScroll";
import { socialRef } from "../firebase";

import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StripesThick from "./svg/StripesThick";

function Item(props) {
  return (
    <ImageContainer>
      <img className='image' src={props.image.imgUrl1} alt='social media' />
      <img className='image' src={props.image.imgUrl2} alt='social media' />
      <img className='image' src={props.image.imgUrl3} alt='social media' />
      <img className='image' src={props.image.imgUrl4} alt='social media' />
    </ImageContainer>
  )
}

const Social = () => {
  const [element, controls] = useScroll(fadeAnimation.show, 0.2);
  const [imgUrl, setImgUrl] = useState([])
  const [loading, setLoading] = useState([])

  const getImages = () => {
    setLoading(true);
    socialRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data().imgUrl);
      })
      setImgUrl(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getImages();
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  const images = [
    {
      imgUrl1: imgUrl[0],
      imgUrl2: imgUrl[1],
      imgUrl3: imgUrl[2],
      imgUrl4: imgUrl[3],
    },
    {
      imgUrl1: imgUrl[4],
      imgUrl2: imgUrl[5],
      imgUrl3: imgUrl[6],
      imgUrl4: imgUrl[7],
    },
    {
      imgUrl1: imgUrl[8],
      imgUrl2: imgUrl[9],
      imgUrl3: imgUrl[10],
      imgUrl4: imgUrl[11],
    }
  ]

  return (
    <>
      <motion.section
        variants={fadeAnimation}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <StripesThick
        />
        <Wrapper>
          <h2 className="title">Use hashtag <span className="title-span">#slavclothing</span>  and show us your style</h2>
          <Carousel id="carousel" indicators={false} animation='fade'>
            {
              images.map((image, i) => <Item key={i} image={image} />)
            }
          </Carousel>
          <Container >
            <div className="stripes-container">
              <div className="stripes"></div>
            </div>
            <div className="newsletter">
              <h2 className="title">
                Join our newsletter
                    </h2>
              <form className='form' action="">
                <TextField id="standard-basic" label="Your email" variant="outlined" />
                <Button size="large" variant="outlined">Submit</Button>
              </form>
            </div>
          </Container>
        </Wrapper>
      </motion.section>
    </>
  )
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Wrapper = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 320px;

  @media (max-width: 768px) {
    margin-bottom: 15rem;
  }

  .title{
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .title-span{
      color:#3396C6;
      font-weight: 400;
  }

  .image{
      height: 18rem;
  }
`
const Container = styled.div`
  background: #ddd;
  height: 20rem;
  width: 100%;
  display: flex;

  .title{
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
  }
  .form{
      display:flex;
  }
  .newsletter{
    display: flex;
    flex-direction: column;;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .stripes-container{
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;

  }
  .stripes{
    position: relative;
      width: 25px;
      height: 20rem;
      background-color: #3396C6;
      margin-bottom: 8rem;
      margin-top: 8rem;
      align-self: flex-start  ;

      &:before{
        content: '';
        position: absolute;
        top: -50px;
        left: -53px;
        width: 25px;
        height: 20rem;
        background-color: #3396C6;
      }

      &:after{
        content: '';
        position: absolute;
        top: 25px;
        left: 53px;
        width: 25px;
        height: 20rem;
        background-color: #3396C6;
      }
  }
`

export default Social;