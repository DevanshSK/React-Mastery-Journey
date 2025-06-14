import { motion } from "motion/react";
import { useState } from "react";

function LongPressSize() {
    const [isLarge, setIsLarge] = useState(false);

    const handleLongPressStart = () => setIsLarge(true);
    const handleLongPressEnd = () => setIsLarge(false);


    return (
        <motion.div
            onTapStart={handleLongPressStart}
            onTapCancel={handleLongPressEnd}
            onTap={handleLongPressEnd}
            className={`w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${isLarge ? "w-48 h-48" : ""}`}
        >
            Long Press me!
        </motion.div>
    )
}

export default LongPressSize