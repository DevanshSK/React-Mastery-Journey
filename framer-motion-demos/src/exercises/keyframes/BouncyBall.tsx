import { motion } from 'motion/react'

const BouncyBall = () => {
    return (
        <motion.div
            animate={{ y: [-100, 100, -100] }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            }}
            className='w-40 h-40 bg-orange-500 rounded-full'
        />
    )
}

export default BouncyBall