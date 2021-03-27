import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Carousel from 'react-material-ui-carousel'
import { imgRef } from "../firebase";

function Item(props) {
    return (
        <>
            <img className="image" src={props.image.imgUrl} alt='social media' />
        </>
    )
}

const Social = () => {
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
        { imgUrl: imgUrl[0] },
        { imgUrl: imgUrl[1] },
        { imgUrl: imgUrl[2] }
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