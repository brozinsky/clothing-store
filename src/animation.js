export const headerAnimation = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.5,
        }
    }
}

export const pageAnimation = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.3,
        }
    }
}

export const footerAnimation = {
    initial: {
        opacity: 0,
        y: '18rem',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.4,
        }
    },
    exit: {
        opacity: 0,
        y: '18rem',
        transition: {
            duration: 0.4,
        }
    }
}

export const fadeAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: [0.42, 0, 0.58, 1], duration: 0.5, repeat: 0 },
    },
};