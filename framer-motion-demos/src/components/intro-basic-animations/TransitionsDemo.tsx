import {motion} from "motion/react";

const TransitionsDemo = () => {
  return (
    <div>
        <motion.div 
            className="box" 
            initial={{ x: 0 }}
            animate={{ x: 100}}

            // Delay: Adds wait before the animation.
            // transition={{ delay: 2 }}
            // transition={{ delay: 5 }}

            // Duration: The duration of the animation.
            // Ease: The speed curve of the animation.
            transition={{ duration: 1, ease: "circIn", delay: 1 }}
        />
    </div>
  )
}

export default TransitionsDemo