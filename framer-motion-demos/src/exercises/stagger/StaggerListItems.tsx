import { motion } from "motion/react";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const StaggerListItems = () => {
    return (
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: { staggerChildren: .3, delayChildren: 1 },
                }
            }}
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    variants={staggerVariants}
                    className="mb-2 w-64 p-5 bg-yellow-300 font-bold text-[#0d1017]"
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default StaggerListItems