import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

const UseMotionValueDemo = () => {

    const x = useMotionValue(180);

    useMotionValueEvent(x, "animationStart", () => {
        console.log("Animation startes on x");
    })

    useMotionValueEvent(x, "change", (latest) => {
        console.log("x changed to", latest);
    })

    return (
        <div>
            <motion.div 
                className="stagger-box"
                style={{ x }}
                drag
                dragConstraints={{ left: 0, right: 200 }}
            />
        </div>
    )
}

export default UseMotionValueDemo