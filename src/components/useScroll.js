import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export const useScroll = (animation) => {
    const controls = useAnimation();
    const [element, view] = useInView({ threshold: 0.2 });
    if (view) {
        controls.start(animation);
    }
    return [element, controls]
};