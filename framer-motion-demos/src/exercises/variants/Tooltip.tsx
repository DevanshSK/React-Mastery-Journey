import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

const Tooltip = () => {
    const [visible, setVisible] = useState(true);


    return (
        <div className="relative inline-block">
            <button
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-2 bg-blue-500 text-white"
            >
                Hover over Me
            </button>
            {/* <AnimatePresence> */}

            {
                visible && (
                    <motion.div
                        variants={tooltipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: .2 }}
                        className="absolute -top-20 bg-white text-black p-3 rounded"
                    >
                        Tooltip Content
                    </motion.div>
                )
            }
            {/* </AnimatePresence> */}
        </div>
    )
}

export default Tooltip