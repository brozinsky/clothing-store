import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Carousel from 'react-material-ui-carousel'
import { imgRef } from "../firebase";

function Item(props) {
    return (
        <>
            <picture>
                <source className="image"
                    media="(min-width: 1200px)"
                    srcSet={props.image.imgUrl} />
                <source className="image"
                    media="(min-width: 768px)"
                    srcSet={props.image.imgUrlTablet} />
                <img className="image"
                    src={props.image.imgUrlMobile} alt="Carousel item" />
            </picture>
        </>
    )
}

const Header = () => {
    const [imgUrl, setImgUrl] = useState([])
    const [loading, setLoading] = useState([])

    const getProducts = () => {
        setLoading(true);
        imgRef.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data().imgUrl);
            })
            setImgUrl(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    let images = [
        { imgUrl: imgUrl[0], imgUrlTablet: imgUrl[3], imgUrlMobile: imgUrl[6] },
        { imgUrl: imgUrl[1], imgUrlTablet: imgUrl[4], imgUrlMobile: imgUrl[7] },
        { imgUrl: imgUrl[2], imgUrlTablet: imgUrl[5], imgUrlMobile: imgUrl[8] }
    ]

    return (
        <>
            <Wrapper >
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
max-width: 1200px;
height: 27rem;
margin-bottom: 3.6rem;
@media (max-width: 1200px) {
    min-width: 100vw;
    height: 22rem;
  }
@media (max-width: 768px) {
    margin-bottom: 0rem;
    min-width: 100vw;
    height: 27rem;
  }
.image{
  max-width: 1200px;
  /* height: auto; */
  margin-top: 3rem;
}
`

export default Header;