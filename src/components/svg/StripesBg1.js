import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';

const StripesBg1 = () => {
    return (
        <Svg
            width="1920" height="943"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                initial={{
                    pathLength: 0,
                    pathOffset: 1,
                    strokeWidth: 30
                }}
                animate={{
                    pathLength: 1,
                    pathOffset: 0,
                    strokeWidth: 40
                }}
                transition={{
                    delay: 1,
                    duration: 2.5,
                    ease: 'linear'
                }} d="M-151 32.2858C893.432 -17.8744 766.314 244.608 1006.12 377.91C1245.93 511.213 1433.51 120.925 1949.54 635.582C2362.37 1047.31 3054.21 456.242 3348.53 109.244"
                stroke="#3396C6"
                stroke-opacity="0.65"
            />
            <motion.path
                initial={{
                    pathLength: 0,
                    pathOffset: 1,
                    strokeWidth: 30
                }}
                animate={{
                    pathLength: 1,
                    pathOffset: 0,
                    strokeWidth: 40
                }}
                transition={{
                    delay: 0.5,
                    duration: 2.5,
                    ease: 'linear'
                }} d="M-151 165.69C893.432 115.53 766.314 378.012 1006.12 511.315C1245.93 644.617 1433.51 254.329 1949.54 768.987C2362.37 1180.71 3054.21 589.647 3348.53 242.648"
                stroke="#3396C6"
                stroke-opacity="0.8"
                stroke-width="50" />
            <motion.path
                initial={{
                    pathLength: 0,
                    pathOffset: 1,
                    strokeWidth: 20
                }}
                animate={{
                    pathLength: 1,
                    pathOffset: 0,
                    strokeWidth: 40
                }}
                transition={{
                    delay: 0,
                    duration: 2.5,
                    ease: 'linear'
                }} d="M-151 303.116C893.432 252.956 766.314 515.438 1006.12 648.74C1245.93 782.043 1433.51 391.755 1949.54 906.412C2362.37 1318.14 3054.21 727.072 3348.53 380.074"
                stroke="#3396C6"
                stroke-width="50" />
        </Svg>
    )
}

const Svg = styled.svg`
position: absolute;
top: 10%;
left: 0%;
z-index: -3;
opacity: 0.5;
transform: rotate(-8deg);
max-width: 100vw;

@media (max-width: 768px) {
display: none;
}
`
export default StripesBg1