import { motion } from 'motion/react'

const SlideText = () => {
    return (
        <motion.span
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}

            className='text-3xl tracking-wider font-semibold'
        >
            SlideText
        </motion.span>
    )
}

export default SlideText