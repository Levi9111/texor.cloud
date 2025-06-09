import React from 'react';
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
      <button
        className={`
          w-full max-w-[214px] 
          h-[52px] md:h-[70px] 
          rounded-full border border-accent 
          flex items-center justify-center 
          gap-3 md:gap-5 
          px-4 md:px-6
          uppercase 
          ${className}
        `}
        onClick={onClick}
      >
        <p className="text-base md:text-2xl font-medium leading-[140%] tracking-[0]">
          {children}
        </p>
        <img
          src={chevron}
          alt="Chevron Icon"
          width={19}
          height={12}
          className="w-2 md:w-[19px] h-3 md:h-[12px]"
        />
      </button>
    </div>
  );
};

export default Button;
