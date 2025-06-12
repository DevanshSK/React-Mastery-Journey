import { motion } from "motion/react";

const ResponsiveButton = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-3 px-8 bg-blue-500 text-white font-bold"
        >
            Click Me!
        </motion.button>
    )
}

export default ResponsiveButton