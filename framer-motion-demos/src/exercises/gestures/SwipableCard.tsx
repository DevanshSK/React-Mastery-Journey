import { motion, type PanInfo } from "motion/react";
import { useState } from "react";

const SwipableCard = () => {
    const [isRemoved, setIsRemoved] = useState(false);

    const handleSwipe = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 100 || info.offset.x < -100) {
            setIsRemoved(true);
        }
    }

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onDragEnd={handleSwipe}
            className={`w-64 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white ${isRemoved ? "hidden" : ""}`}
        >
            Swipe Me!
        </motion.div>
    )
}

export default SwipableCard