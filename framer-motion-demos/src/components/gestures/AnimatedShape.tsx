import { motion, type Variants } from "motion/react";


const AnimatedShape = () => {

    const boxVariants: Variants = {
        initial: {
            scale: 1, rotate: 0, skew: 0,
        },
        hover: {
            scale: 1.2, rotate: 15, skew: "10deg",
            transition: { duration: 0.3 },
        },
        click: {
            scale: .9, rotate: -15,
            transition: { duration: .3 },
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <motion.div 
                variants={boxVariants}
                className="w-40 h-40 bg-blue-500 rounded-lg"
                initial="initial"
                whileHover="hover"
                whileTap="click"
            >

            </motion.div>
        </div>
    )
}

export default AnimatedShape