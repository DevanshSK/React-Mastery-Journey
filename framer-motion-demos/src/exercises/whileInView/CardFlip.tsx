import { motion } from "motion/react";


const CardFlip = () => {
    return (
        <motion.div className="perspective-1000 w-64 h-64">
            <motion.div
                className="relative w-full h-full"
                initial={{ rotateY: 0 }}
                whileInView={{ rotateY: 180 }}
                transition={{ duration: .6 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div
                    style={{
                        backfaceVisibility: "hidden",
                    }}
                    className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg"
                >
                    Front
                </div>
                <div style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }} className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-lg">
                    Back
                </div>
            </motion.div>
        </motion.div>
    )
}

export default CardFlip