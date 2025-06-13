import { useState } from 'react'
import { motion } from "motion/react";

const switchVariants = {
    off: { x: 0 },
    on: { x: 70 },
};

const ToggleAnimation = () => {
    const [isOn, setIsOn] = useState(false);


    return (
        <button
            className='relative inline-block w-36 h-16'
            onClick={() => setIsOn(t => !t)}
        >
            <motion.div
                className={`w-full h-full rounded-full cursor-pointer`}
                animate={{
                    backgroundColor: isOn ? "#00c951" : "#d1d5dc",
                }}
            />
            <motion.div
                className='absolute top-1 left-[9px] w-14 h-14 rounded-full bg-white shadow'
                variants={switchVariants}
                animate={isOn ? "on" : "off"}
            />
        </button>
    )
}

export default ToggleAnimation