import { motion } from "motion/react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Caption for Image 1",
    },
    {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Caption for Image 2",
    },
    {
        src: "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Caption for Image 3",
    },
];

const ImageGallery = () => {

    return (
        <div
        className="w-[80%] flex">
            {images.map((image, index) => (
                <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg "
                >
                    <img src={image.src} alt={image.caption} className="w-full h-auto" />
                    <motion.div 
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/80 text-white cursor-pointer"
                    >
                        <p className="text-lg">{image.caption}</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGallery