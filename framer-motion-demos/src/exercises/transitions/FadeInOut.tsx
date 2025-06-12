import { motion } from "motion/react";
import { useState } from "react";

const FadeInOut = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center gap-4">
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="box bg-red-500!"
                />
            )}

            <button onClick={() => setIsVisible(t => !t)} className="bg-white px-3 py-1 text-black border border-black">Toggle IT</button>
        </div>
    )
}

export default FadeInOut