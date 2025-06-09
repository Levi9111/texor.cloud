'use client';

import React from 'react';
import { motion } from 'framer-motion';
import chevron from '/icons/chevron.png';

interface StepsButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<StepsButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <div className="flex justify-center mt-6 md:mt-10">
      <motion.button
        onClick={onClick}
        className={`
          w-full max-w-[214px] 
          h-[52px] md:h-[70px] 
          rounded-full border border-accent 
          flex items-center justify-center 
          gap-3 md:gap-5 
          px-4 md:px-6
          uppercase 
          text-white bg-transparent
          ${className}
        `}
        animate={{
          y: [0, -5, 0], // floating up and down
          scale: [1, 1.03, 1], // slight bounce
          boxShadow: [
            '0px 0px 0px rgba(62, 255, 190, 0.0)',
            '0px 0px 20px rgba(62, 255, 190, 0.5)',
            '0px 0px 0px rgba(62, 255, 190, 0.0)',
          ],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <p className="text-base md:text-2xl font-medium leading-[140%] tracking-tight">
          {children}
        </p>
        <img
          src={chevron}
          alt="Chevron Icon"
          width={19}
          height={12}
          className="w-2 md:w-[19px] h-3 md:h-[12px]"
        />
      </motion.button>
    </div>
  );
};

export default Button;
