import type { Variants } from "motion/react";


export const myVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
}