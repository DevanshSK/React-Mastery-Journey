import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const listVariants = {
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
}

const DynamicList = () => {
    const [items, setItems] = useState<string[]>([]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems((prev) => [...prev, newItem]);
    };

    const removeItem = (index: number) => {
        setItems((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div>
            <button
                onClick={addItem}
                className="mb-4 p-2 bg-blue-500 text-white"
            >
                Add Item
            </button>
            <AnimatePresence
                mode="popLayout"
            >
                {items.map((item, index) => (
                    <motion.div
                        layout
                        key={item}
                        variants={listVariants}
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        transition={{ duration: .3 }}
                        className="p-2 bg-gray-200 mb-2 rounded"
                        onClick={() => removeItem(index)}
                    >
                        {item}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default DynamicList