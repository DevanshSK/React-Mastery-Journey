import { motion, useMotionValue, useTransform } from "motion/react";



const DraggableBox = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Defining custom motion value
    const backgroundColor = useTransform(x, [-100, 0, 100], ["#ff0000", "#ffdf20", "#00ff00"]);


    return (
        <motion.div
            drag={"x"}
            dragConstraints={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                // left: -200,
                // right: 200,
                // top: -200,
                // bottom: 200,
            }}
            style={{
                backgroundColor, x, y
            }}
            className="w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer"
        >
            <span className="text-white">Drag Me!</span>
        </motion.div>
    )
}

export default DraggableBox