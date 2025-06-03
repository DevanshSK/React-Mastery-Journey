import { motion } from "motion/react";

const BouncingLoader = () => {
    const elements = [1,2,3];
    return (
        <div
            className="flex justify-center items-center gap-x-2"
        >
            {elements.map((_, index) => (
                <motion.div 
                    key={index}
                    className="w-4 h-4 bg-yellow-300 rounded-full"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        duration: .6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: index * 0.5,
                    }}
                />
            ))}
        </div>
    )
}

export default BouncingLoader