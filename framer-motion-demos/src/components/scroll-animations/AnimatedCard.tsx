import { motion } from "motion/react";

const AnimatedCard = () => {
    return (
        <div className="flex justify-center items-center mt-[30rem]">
            <div className="h-[200vh] w-full flex items-center justify-center">
                <motion.div 
                    initial={{ scale: .5, opacity: 0 }}
                    whileInView={{ scale: 1.1, opacity: 1, y: -200 }}
                    transition={{ duration: .5 }}
                    className="bg-white rounded-lg p-6 shadow-lg text-center"
                    >
                    <h2 className="text-2xl font-bold mb-2 text-black">Amazing Card</h2>
                    <p className="text-gray-600">
                        This card animates beautifully into view!
                    </p>
                </motion.div>

            </div>
        </div>
    )
}

export default AnimatedCard