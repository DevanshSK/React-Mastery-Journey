import { motion } from 'motion/react'

const ColorChangeSequence = () => {
    return (
        <motion.div
            className=' w-40 h-40'
            animate={{
                backgroundColor: ["#FF0000", "#FFA500", "#FFFF00"]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
            }}
        />
    )
}

export default ColorChangeSequence