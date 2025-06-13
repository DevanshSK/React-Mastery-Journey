import { motion } from 'motion/react'

const FadeInComponent = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                duration: .5,
            }}
            className='bg-blue-500 p-6 rounded shadow'
        >
            <h2>Fade in Component</h2>
        </motion.div>
    )
}

export default FadeInComponent