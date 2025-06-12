import { useState } from 'react'
import { motion } from "motion/react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className='flex'>
            <button
                className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'
                onClick={() => setIsOpen(t => !t)}
            >
                Toggle Sidebar
            </button>

            <motion.div
                className={`fixed left-0 top-0 h-full bg-white py-4 px-8 ${isOpen ? "" : "-translate-x-full"}`}
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
            >
                <h2 className='text-xl font-bold text-black'>Sidebar</h2>
                <p className='text-black'>Sidebar content</p>
            </motion.div>
        </div>
    )
}

export default Sidebar