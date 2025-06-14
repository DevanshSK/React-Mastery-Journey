import { motion, type PanInfo } from "motion/react";
import { useState } from "react";

const RotateOnDrag = () => {
    const [rotation, setRotation] = useState<number>(0);

    const handleDrag = (_: unknown, info: PanInfo) => {
        const newRotation = rotation + (info.offset.x / 10000);
        setRotation(newRotation);
    }

    return (
        <motion.div
            drag
            onDrag={handleDrag}
            style={{ rotate: rotation }}
            className='w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center'
        >
            Drag Me!
        </motion.div>
    )
}

export default RotateOnDrag