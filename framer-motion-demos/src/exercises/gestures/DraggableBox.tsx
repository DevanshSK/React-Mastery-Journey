import { motion } from "motion/react";
import { useRef } from "react";

const DraggableBox = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className=" w-full min-h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                drag
                dragConstraints={containerRef}
                whileHover={{
                    cursor: "pointer"
                }}
                className="bg-amber-500 w-48 h-48"
            />
        </div>
    )
}

export default DraggableBox