import { motion } from "motion/react";

const Introduction = () => {
    return (
        <div>
            <motion.div 
                className="box" 
                animate={{x: 0}}
            />
        </div>
    )
}

export default Introduction