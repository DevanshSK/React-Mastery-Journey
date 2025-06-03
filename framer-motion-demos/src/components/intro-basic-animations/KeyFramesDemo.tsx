// import { motion } from "motion/react";
import PulsingButton from "./PulsingButton";
// import BouncingLoader from "./BouncingLoader";

const KeyFramesDemo = () => {
    return (
        <div>
            {/* Keyframes demo example */}
            {/* <motion.div 
                className="box"  
                animate={{
                    scale: [.5, 1, 2, 2, 3, 2, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["0%", "20%", "50%", "100%", "20%"],
                }}
                transition={{
                    duration: 5,
                }}
            /> */}

            {/* Example 1: Pulsing Button */}
            <PulsingButton />

            {/* Example 1: Bouncy Loader */}
            {/* <BouncingLoader /> */}
        </div>
    )
}

export default KeyFramesDemo