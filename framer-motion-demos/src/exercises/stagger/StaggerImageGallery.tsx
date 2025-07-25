import { motion } from "motion/react";

const images = [
    "https://images.unsplash.com/photo-1507936580189-3816b4abf640?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?q=80&w=3200&auto=format&fit=crop",
];

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const StaggerImageGallery = () => {
    return (
        <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: { staggerChildren: 0.3, delayChildren: .5 },
                },
            }}
        >
            {images.map((src, index) => (
                <motion.img
                    key={index}
                    src={src}
                    alt={`Image ${index}`}
                    variants={staggerVariants}
                    className="w-[20rem] h-auto ml-[2rem] rounded "
                />
            ))}
        </motion.div>
    )
}

export default StaggerImageGallery