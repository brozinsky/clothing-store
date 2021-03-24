import React from 'react';
import styled from "styled-components";

import Carousel from 'react-material-ui-carousel'

import caro1 from "../img/header/caro-sale.png";
import caro2 from "../img/header/caro-arrivals.png";
import caro3 from "../img/header/caro-trailer.png";

function Item(props) {
    return (
        <>
            <img className="image" src={props.image.imgUrl} alt='social media' />
        </>
    )
}

const Social = () => {

    var images = [
        { imgUrl: caro1 },
        { imgUrl: caro2 },
        { imgUrl: caro3 }
    ]

    return (
        <>
            <Wrapper>
                <Carousel animation='slide'>
                    {images.map((image, i) =>
                        <Item key={i} image={image} />)}
                </Carousel>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
margin: 0 auto;
width: 1200px;
height: 27rem;
margin-bottom: 3.6rem;

.image{
  max-width: 1200px;
  height: auto;
  margin-top: 3rem;
}
`

export default Social;