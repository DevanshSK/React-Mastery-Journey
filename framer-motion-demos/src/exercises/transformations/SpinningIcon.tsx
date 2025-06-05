import { motion } from 'motion/react';

const SpinningIcon = () => {
  return (
    <motion.img 
        src="https://icon.icepanel.io/Technology/svg/React.svg"
        className='w-40 h-40'
        animate={{ rotate: 360 }}
        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
    />
  )
}

export default SpinningIcon