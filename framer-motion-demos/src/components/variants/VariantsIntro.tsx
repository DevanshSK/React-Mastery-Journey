import { motion, type Variants } from "motion/react";
import { useState } from "react";
// import { myVariants } from "./variants";

const VariantsIntro = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const boxVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
    }

    return (
        <div>
            {/* 1. Using inline variants */}
            {/* <motion.div 
                className="box"
                variants={{
                    hidden: {
                        opacity: 0,
                        scale: 0.8,
                    },
                    visible: { opacity: 1, scale: 1 },
                    exit: {opacity: 0, scale: 0.5 },
                }}
                initial="hidden"
                animate={isVisible ? "visible": "hidden"}
                exit="exit"
                transition={{
                    duration: .27,
                }}
                onClick={() => setIsVisible(t => !t)}
            /> */}

            {/* 2. Extracting variants to another object and passing its reference. */}
            <motion.div
                className="box"
                variants={boxVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                exit="exit"
                transition={{
                    duration: .27,
                }}
                onClick={() => setIsVisible(t => !t)}
            />

            {/* 3. Importing and using variants declared in an external file. */}
            {/* <motion.div
                className="box"
                variants={myVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                exit="exit"
                transition={{
                    duration: .27,
                }}
                onClick={() => setIsVisible(t => !t)}
            /> */}
        </div>
    )
}

export default VariantsIntro