import { useScroll, useTransform, motion } from "motion/react";

const ScrollAnimation = () => {
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);


    return (
        <div className="h-screen flex justify-center items-center">
            <motion.div 
                className="bg-blue-500 w-32 h-32 rounded shadow-lg"
                style={{ scale, opacity }}
            >
            </motion.div>
            <div className="w-full h-[200vh]"></div>
        </div>
    )
}

export default ScrollAnimation