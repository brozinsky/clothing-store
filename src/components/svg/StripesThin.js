import React from 'react'
import { motion } from 'framer-motion';
import { useScroll } from "../useScroll";

const swipe = {
    hidden: {
        x: '-100vw'
    },
    show: {
        x: 0
    },
};

const StripesThin = () => {
    const [element, controls] = useScroll(swipe.show, 0.6);

    return (
        <div ref={element} >
            <svg
                // width="1920" height="93"
                viewBox="0 0 1920 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect
                    variants={swipe}
                    animate={controls}
                    initial="hidden"

                    transition={{
                        delay: 0,
                        duration: 2.5,
                        ease: 'anticipate'
                    }}
                    y="38" width="1705" height="17"
                    fill="#3396C6" />
                <motion.rect
                    variants={swipe}
                    animate={controls}
                    initial="hidden"
                    transition={{
                        delay: 0.2,
                        duration: 2.5,
                        ease: 'anticipate'
                    }}
                    y="77" width="1920" height="16"
                    fill="#3396C6" />
                <motion.rect
                    variants={swipe}
                    animate={controls}
                    initial="hidden"
                    transition={{
                        delay: 0.3,
                        duration: 2.5,
                        ease: 'anticipate'
                    }}
                    width="1490" height="16"
                    fill="#3396C6" />
            </svg>
        </div>
    )
}


export default StripesThin