import { motion } from 'motion/react'

const PulsingButton = () => {
    return (
        <motion.button
            className='bg-white px-6 py-3 text-black leading-snug font-bold'
            animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1],
            }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: .6,
                times: [0, 0.2, 1],
                ease: "easeInOut",
                repeatDelay: 1,
            }}
        >
            I'm Trippy
        </motion.button>
    )
}

export default PulsingButton