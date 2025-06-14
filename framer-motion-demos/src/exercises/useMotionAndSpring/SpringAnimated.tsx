import { motion, useMotionValue, useSpring } from 'motion/react'

const SpringAnimated = () => {
    // const x = useMotionValue(0);
    // const y = useMotionValue(0);
    const x = useSpring(0);
    const y = useSpring(0);

    const moveBox = () => {
        x.set(Math.random() * 300);
        y.set(Math.random() * 300);
    };

    return (
        <div className='relative'>
            <motion.div
                style={{ x, y }}
                className='w-32 h-32 bg-blue-500 rounded grid place-content-center'
                onClick={moveBox}
            >
                Click me
            </motion.div>
        </div>
    )
}

export default SpringAnimated