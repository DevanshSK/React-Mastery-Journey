import { motion } from "motion/react";

const PulsingButton = () => {
    return (
        <motion.button
            className="rounded bg-blue-500 text-white px-6 py-2"


            // Pulsing Animation.
            // animate={{
            //     scale: [1, 1.1, 1],
            //     backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
            // }}
            // transition={{
            //     duration: .8,
            //     ease: "easeInOut",
            //     repeat: Infinity,
            // }}

            // Heartbeat animation.
            animate={{
                scale: [1, 1.3, 1, 1.2, 1],
            }}
            transition={{
                duration: 1.2,
                times: [0, 0.2, 0.4, 0.6, 1],
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
            }}
        >
            Click Me
        </motion.button>
    )
}

export default PulsingButton