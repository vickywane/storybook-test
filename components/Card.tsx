import React from "react";

const Card = ({ children }) => {
  return (
    <div className="h-[602px] w-[445px] bg-[white] shadow-xl rounded-xl flex items-center justify-center">
      {children}
    </div>
  );
};

export default Card;
