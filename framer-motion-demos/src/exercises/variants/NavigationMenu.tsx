import { motion } from 'motion/react'
import { useState } from 'react';

const menuVariants = {
    closed: { x: "-100%" },
    open: { x: 0 },
};

export const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-gray-500 text-white"
            >
                Toggle Menu
            </button>
            <motion.div
                variants={menuVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 w-64 h-full bg-white"
            >
                <ul className="p-4 text-black font-bold">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </motion.div>
        </div>
    );
}
