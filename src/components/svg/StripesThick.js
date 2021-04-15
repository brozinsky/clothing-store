import React from 'react'
import { motion } from 'framer-motion';
import styled from "styled-components";

import { useScroll } from "../useScroll";

const swipe = {
    hidden: {
        x: '-100vw'
    },
    show: {
        x: 0
    },
};

const StripesThick = () => {
    const [element, controls] = useScroll(swipe.show, 0);

    return (
        <div ref={element} >
            <Svg
                // width="1920" height="165"
                viewBox="0 0 1920 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                    variants={swipe}
                    animate={controls}
                    initial="hidden"
                    transition={{
                        delay: 0.1,
                        duration: 2.5,
                        ease: 'anticipate'
                    }} y="69" width="1623" height="27" fill="#3396C6" />
                <motion.rect
                    variants={swipe}
                    animate={controls}
                    initial="hidden"
                    transition={{
                        delay: 0.3,
                        duration: 2.5,
                        ease: 'anticipate'
                    }} y="138" width="1920" height="27" fill="#3396C6" />
                <motion.rect
                    variants={swipe}
                    animate={controls}
                    initial="hidden"
                    transition={{
                        delay: 0,
                        duration: 2.5,
                        ease: 'anticipate'
                    }} width="1920" height="27" fill="#3396C6" />
            </Svg>

        </div>
    )
}

const Svg = styled(motion.svg)`
margin: 3rem 0;
@media (max-width: 768px) {
      width: 100vw;
      margin: 1rem 0;
}
`

export default StripesThick