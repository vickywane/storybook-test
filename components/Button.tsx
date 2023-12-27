import React from "react";

interface ButtonProps {
  title: string;
  background?: string;
  clickHandler: () => void;
}

const Button = ({
  title,
  background = "#4263EB",
  clickHandler,
}: ButtonProps) => {
  return (
    <button
      onClick={clickHandler}
      className={`min-h-[48px] rounded-lg bg-[#4263EB] text-white px-[48px]`}
    >
      {title}
    </button>
  );
};

export default Button;
