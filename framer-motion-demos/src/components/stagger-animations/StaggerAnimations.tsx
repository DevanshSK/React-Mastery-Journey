import { motion, type Variants } from "motion/react";

const parentVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.8,   // Adds a stagger delay between each child elements.
        }
    }
}

const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const StaggerAnimations = () => {


    return (
        <motion.div
            variants={parentVariant}
            initial="hidden"
            animate="visible"
        >
            {[...Array(5)].map((_, index) => (
                <motion.div 
                    key={index} 
                    className="stagger-box mt-[2rem]" 
                    variants={childVariants}
                />
            ))}
        </motion.div>
    )
}

export default StaggerAnimations