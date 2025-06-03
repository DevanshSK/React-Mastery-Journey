import { motion } from "motion/react";
import { useState } from "react";


const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const cardVariants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 },
    };

    return (
        <div
            onClick={() => setIsFlipped(t => !t)}
            className="w-64 h-40"
            style={{
                perspective: "1000px",
            }}
        >
            <motion.div
                className="relative w-full h-full rounded-lg shadow-lg"
                variants={cardVariants}
                initial="front"
                animate={isFlipped ? "back" : "front"}
                transition={{ duration: .6 }}
                style={{ transformStyle: "preserve-3d"}}
            >
                {/* Front Side of Card */}
                <div className="absolute inset-0 bg-white text-black flex items-center justify-center text-xl font-bold backface-hidden">Front Side</div>
                {/* Back Side of Card */}
                <div className="absolute inset-0 bg-blue-500 flex items-center justify-center text-xl font-bold rotate-y-180 backface-hidden">Back Side</div>
            </motion.div>
        </div>
    )
}

export default FlippingCard