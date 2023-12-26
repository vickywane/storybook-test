import React from "react";

const Button = ({ title, bg = "#4263EB", }) => {
  return <button className={`min-h-[48px] rounded-lg bg-[#4263EB] text-white px-[48px]`}>{title}</button>;
};

export default Button;
