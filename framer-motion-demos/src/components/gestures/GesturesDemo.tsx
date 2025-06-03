import { motion } from "motion/react";
import { useRef } from "react";

const GesturesDemo = () => {

    const constraintsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={constraintsRef} className="bg-red-500 w-[700px] h-[700px] flex items-center justify-center">
            {/* whileHover - runs when component is hovered */}
            {/* <motion.div 
                className="box" 
                whileHover={{
                    scale: 1.2,
                    rotate: 10
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                }}
            /> */}

            {/* whileTap - animates when user taps on element */}
            {/* <motion.div 
                className="box" 
                whileTap={{ scale: .8, backgroundColor: "crimson" }}
                transition={{ type: "spring", stiffness: 300 }}
            /> */}

            {/* whileDrag - animates when user drags an element */}
            <motion.div 
                className="box" 
                drag    // Makes element draggable

                // Drag Directions - Set dragging Directions
                // drag="x"
                // drag="y"

                // Set dragging constraints around the element.
                // dragConstraints={{
                //     top: -50,
                //     bottom: -50,
                //     left: 50,
                //     right: 50,
                // }}

                // Set dragging constraints based on a parent container using refs.
                dragConstraints={constraintsRef}

                whileTap={{ scale: .8, borderRadius: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
            />
        </div>
    )
}

export default GesturesDemo