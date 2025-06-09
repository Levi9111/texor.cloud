import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const backdropVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(8px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 60,
    rotateX: 15,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300,
      mass: 0.8,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: -40,
    rotateX: -10,
    filter: 'blur(8px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  // Floating animation
  floating: {
    y: [0, -8, 0],
    rotateX: [0, 1, 0],
    scale: [1, 1.003, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
      times: [0, 0.5, 1],
    },
  },
};

const decorativeVariants = {
  hidden: {
    scale: 0,
    rotate: -45,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
      type: 'spring',
      damping: 20,
      stiffness: 200,
    },
  },
  exit: {
    scale: 0,
    rotate: 45,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const closeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      type: 'spring',
      damping: 15,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 90,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 10,
      stiffness: 200,
    },
  },
  tap: {
    scale: 0.95,
    rotate: 180,
  },
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
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-start justify-center"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            className="p-[55px] mt-10 rounded-2xl shadow-2xl max-w-[95vw] h-[80vh] relative border border-accent z-[1000] bg-gradient-to-br  backdrop-blur-xl"
            style={{
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
            variants={modalVariants}
            initial="hidden"
            animate={['visible', 'floating']}
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced decorative elements with animations */}
            <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <motion.div
                className="bg-gradient-to-r from-accent/80 to-accent h-[200px] w-[300px] absolute -bottom-[190px] z-[200]"
                style={{
                  clipPath: 'polygon(15% 0, 85% 0, 100% 15%, 0 15%)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                }}
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              <motion.div
                className="bg-gradient-to-r from-accent to-accent/80 h-[200px] w-[300px] absolute -top-[22px]"
                style={{
                  clipPath: 'polygon(20% 15%, 80% 15%, 100% 0, 0 0)',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                }}
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              {/* Additional floating particles for ambiance */}
              <motion.div
                className="absolute top-10 right-10 w-2 h-2 bg-accent/30 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute bottom-20 left-12 w-1 h-1 bg-accent/40 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.9, 0.4],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 2,
                }}
              />
            </div>

            <motion.div
              className="overflow-auto h-full w-full hidden-scrollbar"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: { duration: 0.3 },
              }}
            >
              {children}
            </motion.div>

            <motion.button
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition rounded-full size-12 border border-gray-700/50 hover:border-accent flex items-center justify-center bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm cursor-pointer font-bold shadow-xl"
              style={{
                boxShadow:
                  '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
              onClick={onClose}
              aria-label="Close modal"
              variants={closeButtonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              whileTap="tap"
            >
              ✕
            </motion.button>

            <motion.button
              className="md:hidden absolute top-2 right-2 text-accent transition rounded-full size-9 flex items-center justify-center bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm cursor-pointer font-bold shadow-xl"
              style={{
                boxShadow:
                  '0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
              onClick={onClose}
              aria-label="Close modal"
              variants={closeButtonVariants}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  );
};

export default Modal;
