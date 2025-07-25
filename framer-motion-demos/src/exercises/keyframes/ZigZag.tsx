import { motion } from 'motion/react'

const ZigZag = () => {
    return (
        <motion.div
            className="w-16 h-16 bg-green-500"
            animate={{
                x: [0, 50, 0, -50, 0],
                y: [0, -50, 0, 50, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "anticipate",
            }}
        />
    )
}

export default ZigZag