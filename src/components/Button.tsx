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
        className={` w-[214px] h-[70px] rounded-[50px] border border-accent flex items-center justify-center gap-5 uppercase ${className}`}
        onClick={onClick}
      >
        <p className="text-2xl font-[500] leading-[140%] tracking-[0]">
          {children}
        </p>
        <img src={chevron} alt="Chevron Icon" width={19} height={12} />
      </button>
    </div>
  );
};

export default Button;
