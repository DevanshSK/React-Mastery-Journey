import { motion } from "motion/react";

const Introduction = () => {
    return (
        <div>
            {/* Transforming Position */}
            {/* <motion.div className="box" animate={{ x: 100 }} /> */}
            {/* <motion.div className="box" animate={{ y: 100 }} /> */}

            {/* Transforming Rotation */}
            {/* <motion.div className="box" animate={{ rotateX: 60 }} /> */}
            {/* <motion.div className="box" animate={{ rotateY: 60 }} /> */}
            {/* <motion.div className="box" animate={{ rotate: 20 }} /> */}

            {/* Transforming Scale */}
            {/* <motion.div className="box" animate={{ scaleX: 2 }} /> */}
            {/* <motion.div className="box" animate={{ scaleY: 2 }} /> */}
            {/* <motion.div className="box" animate={{ scale: 2 }} /> */}


            {/* Transforming Tilt or Skew */}
            {/* <motion.div className="box" animate={{ skewX: 20 }} /> */}
            {/* <motion.div className="box" animate={{ skewY: 20 }} /> */}
            <motion.div className="box" animate={{ skew: 30 }} />
        </div>
    )
}

export default Introduction