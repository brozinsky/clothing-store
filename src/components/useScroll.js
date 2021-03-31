import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export const useScroll = (animation, threshold) => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: threshold });
    if (view) {
        controls.start(animation);
    }
    return [element, controls]
};