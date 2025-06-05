import { motion } from 'motion/react';

const SequentialBoxes = () => {
    return (
        <>
        {[...Array(3)].map((_, i) => (
            <motion.div 
                key={i}
                className='bg-teal-500 w-20 h-20 m-2'
                animate={{ y : [-50, 50, -50] }}
                transition={{ duration: .9, delay: i * 0.3, repeat: Infinity }}
            />
        ))}
        </>
    )
}

export default SequentialBoxes