import React from 'react';
import styled from "styled-components";
import { motion } from 'framer-motion';
import { fadeAnimation } from '../animation';
import { useScroll } from "../components//useScroll";

import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import StripesThick from "./svg/StripesThick";

import sm1 from "../img/socials/sm1.png";
import sm2 from "../img/socials/sm2.png";
import sm3 from "../img/socials/sm3.png";
import sm4 from "../img/socials/sm4.png";
import sm5 from "../img/socials/sm5.png";
import sm6 from "../img/socials/sm6.png";
import sm7 from "../img/socials/sm7.png";
import sm8 from "../img/socials/sm8.png";
import sm9 from "../img/socials/sm9.png";
import sm10 from "../img/socials/sm10.png";
import sm11 from "../img/socials/sm11.png";
import sm12 from "../img/socials/sm12.png";


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
  const [element, controls] = useScroll(fadeAnimation.show, 0.6);

  const images = [
    {
      imgUrl1: sm1,
      imgUrl2: sm2,
      imgUrl3: sm3,
      imgUrl4: sm4,
    },
    {
      imgUrl1: sm5,
      imgUrl2: sm6,
      imgUrl3: sm7,
      imgUrl4: sm8,
    },
    {
      imgUrl1: sm9,
      imgUrl2: sm10,
      imgUrl3: sm11,
      imgUrl4: sm12,

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