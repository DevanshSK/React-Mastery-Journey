import { motion } from 'motion/react';

const Box = () => {
    return (
        <motion.div 
            className='bg-blue-300 w-20 h-20'
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ duration: 2 }}
        />
    )
}

export default Box