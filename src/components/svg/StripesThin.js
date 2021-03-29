import React from 'react'
import { motion } from 'framer-motion';

const StripesThin = () => {
    return (
        <svg width="1920" height="93" viewBox="0 0 1920 93" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                }} y="38" width="1705" height="17" fill="#3396C6" />
            <motion.rect
                initial={{
                    x: '-100vw',
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    delay: 0.2,
                    duration: 2.5,
                    ease: 'anticipate'
                }} y="77" width="1920" height="16" fill="#3396C6" />
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
                }} width="1490" height="16" fill="#3396C6" />
        </svg>
    )
}


export default StripesThin