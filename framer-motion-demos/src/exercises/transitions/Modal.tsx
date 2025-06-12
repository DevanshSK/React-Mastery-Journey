import React, { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";

const Modal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(t => !t)}
                className="bg-white px-3 py-1 text-black border border-black"
            >
                Toggle IT
            </button>

            {/* For allowing exit animations also */}
            {/* <AnimatePresence> */}
            {
                isOpen && (
                    <motion.div
                        className="absolute w-full h-full inset-0 bg-black/50 flex items-center justify-center"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.3,
                        }}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white px-8 py-6 rounded-lg text-black"
                        >
                            <h2 className="text-lg font-bold">Modal Title</h2>
                            <p>This is a modal window!</p>
                            <button
                                className="mt-4 py-1 px-4 bg-red-500 text-white rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )
            }
            {/* </AnimatePresence> */}
        </div>
    )
}

export default Modal