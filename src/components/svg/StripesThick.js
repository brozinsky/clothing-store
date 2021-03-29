import React from 'react'
import { motion } from 'framer-motion';
import styled from "styled-components";

const StripesThick = () => {
    return (
        <Svg width="1920" height="165" viewBox="0 0 1920 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
                initial={{
                    x: '-100vw',
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    delay: 0.1,
                    duration: 2.5,
                    ease: 'anticipate'
                }} y="69" width="1623" height="27" fill="#3396C6" />
            <motion.rect
                initial={{
                    x: '-100vw',
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    delay: 0.3,
                    duration: 2.5,
                    ease: 'anticipate'
                }} y="138" width="1920" height="27" fill="#3396C6" />
            <motion.rect
                initial={{
                    x: '-100vw',
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    delay: 0,
                    duration: 2.5,
                    ease: 'anticipate'
                }} width="1920" height="27" fill="#3396C6" />
        </Svg>
    )
}

const Svg = styled.svg`
margin: 3rem 0;
`

export default StripesThick