import { motion, useMotionValue, useSpring } from "motion/react";

const RangeSlider = () => {

    // const scale = useMotionValue(1);    // Only animates scale without spring animations.
    const scale = useSpring(1);    // Animates scale with spring animations.


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Using custom motion value
        scale.set(parseFloat(e.target.value));
    }

    return (
        <div className="flex flex-col items-center">
            <motion.div
                className="stagger-box"
                style={{ scale }}
            />

            <div className="mt-[6rem]">
                <input
                    type="range"
                    min={0.5}
                    max={5}
                    step={0.01}
                    defaultValue={1}
                    onChange={changeHandler}
                />
            </div>
        </div>
    )
}

export default RangeSlider