import { motion } from "motion/react";


const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const FadeAndSlideIn = () => {
    return (
        <motion.ul
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            variants={listVariants}
            transition={{ staggerChildren: .3 }}
        >
            {items.map((item, index) => (
                <motion.li
                    key={index}
                    className="bg-blue-500 p-4 text-white my-2 rounded-lg w-96"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >{item}</motion.li>
            ))}
        </motion.ul>
    )
}

export default FadeAndSlideIn