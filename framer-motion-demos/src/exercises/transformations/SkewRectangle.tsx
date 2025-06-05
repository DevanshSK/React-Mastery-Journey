import { motion } from 'motion/react';
import { useState } from 'react';

const SkewRectangle = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <motion.div
            className='bg-yellow-500 w-40 h-20'
            animate={{ skewX: isOpen ? 20 : 0 }}
            transition={{ duration: .3 }}
            onClick={() => setIsOpen(t => !t)}
        />
    )
}

export default SkewRectangle