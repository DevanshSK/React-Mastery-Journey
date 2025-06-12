import { useState } from 'react'
import { AnimatePresence, motion } from "motion/react";

const NotificationToast = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const showToast = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    };



    return (
        <div className='flex flex-col items-center'>
            <button
                className="py-3 px-8 bg-blue-500 text-white font-bold"
                onClick={showToast}
            >
                Show Notification
            </button>

            <AnimatePresence >
                {
                    visible && (
                        <motion.div
                            className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded"
                            initial={{ opacity: 0, translateY: -20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            Notification: File Upload Successful!
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default NotificationToast