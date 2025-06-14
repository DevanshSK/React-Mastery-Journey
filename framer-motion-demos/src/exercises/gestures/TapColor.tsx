import { motion } from "motion/react";
import { useState } from "react";

const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500"];

function TapColor() {
    const [colorIndex, setColorIndex] = useState(0);

    const handleTap = () => {
        setColorIndex(prev => (prev + 1) % colors.length);
    }

    return (
        <motion.div
            onTap={handleTap}
            className={`w-32 h-32 ${colors[colorIndex]} rounded-lg flex items-center justify-center transition-colors duration-300`}
        >
            Tap Me
        </motion.div>
    )
}

export default TapColor