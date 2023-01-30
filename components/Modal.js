import { AiOutlineClose } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Modal(props) {
  const { shown, children, hideModal } = props;

  useEffect(() => {
    if (window !== undefined) {
      document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    }

    return () => {
      document.documentElement.style.overflow = 'auto';  // firefox, chrome
    }
  }, [shown]);

  if (!shown) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-20 bg-current flex items-center justify-center w-full"
        initial={{ opacity: 0.5, y: 100, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0 }}
        transition={{ type: 'tween', duration: 0.235 }}
      >
        <div className="flex flex-col space-y-4 bg-white rounded-lg w-full min-h-screen items-center">
          <div
            className="flex flex-row justify-end px-2 pt-2 w-full text-lg text-orange-500"
            onClick={hideModal}
          >
            <AiOutlineClose className='w-6 h-6'/>
          </div>
          <div className="flex py-4 px-2 w-full">
            {children}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
