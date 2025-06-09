import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEsc);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose, isOpen]);
  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-start justify-center bg-black/40 backdrop-blur-sm "
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="p-[55px] mt-10 rounded-2xl shadow-2xl max-w-[95vw] h-[80vh] relative border border-accent  z-[1000] "
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <div
                className="bg-accent h-[200px] w-[300px] absolute -bottom-[190px] z-[200]"
                style={{
                  clipPath: 'polygon(15% 0, 85% 0, 100% 15%, 0 15%)',
                }}
              ></div>

              <div
                className="bg-accent h-[200px] w-[300px] absolute -top-[22px]"
                style={{
                  clipPath: 'polygon(20% 15%, 80% 15%, 100% 0, 0 0)',
                }}
              ></div>
            </div>
            <div className="overflow-auto h-full w-full  hidden-scrollbar">
              {children}
            </div>
            <button
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition rounded-full size-12 border border-gray-700 hover:border-accent flex items-center justify-center bg-background cursor-pointer font-bold"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;
