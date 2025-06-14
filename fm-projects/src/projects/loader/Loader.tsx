import { motion } from "motion/react";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="relative w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full"
            >
                <motion.div
                    animate={{ opacity: [1, .5, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ borderTopColor: "transparent" }}
                    className="absolute inset-0 border-4 border-blue-300 rounded-full border-solid"
                >

                </motion.div>
            </motion.div>

        </div>
    )
}

export default Loader