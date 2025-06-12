import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const items = [
    { title: "Item 1", content: "This is the content of item 1." },
    { title: "Item 2", content: "This is the content of item 2." },
    { title: "Item 3", content: "This is the content of item 3." },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number>(-1);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };


    return (
        <div className="space-y-2 border-t border-white">
            {items.map((item, index) => (
                <div key={index} className="border-b py-2 border-white w-[400px]">
                    <button
                        className="w-full text-left p-2 rounded focus:outline-none flex items-center justify-between"
                        onClick={() => toggleItem(index)}
                    >
                        <span>{item.title}</span>
                        <ChevronUp className={`transition duration-200 ${openIndex === index ? "rotate-180" : ""}`} />
                    </button>
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: openIndex === index ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-2 rounded">{item.content}</div>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export default Accordion