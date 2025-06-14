import { motion } from 'motion/react'

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9"];

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const GridLayout = () => {
    return (
        <motion.div
            className='grid grid-cols-3 gap-4'
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: { staggerChildren: .2 },
                }
            }}
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    variants={staggerVariants}
                    className='p-4 bg-gray-200 rounded text-black font-semibold'
                >
                    {item}
                </motion.div>
            ))}
        </motion.div>
    )
}

export default GridLayout