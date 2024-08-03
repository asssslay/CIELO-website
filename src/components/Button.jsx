import React, { useState } from "react";

const Button = ({ label, iconURL, newIconURL }) => {
  const [icon, setIcon] = useState(iconURL);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIcon(newIconURL);
    }, 300);
  };

  const handleMouseLeave = () => {
    setIcon(iconURL);
  };

  return (
    <button
      className="flex justify-center items-center gap-2 font-manrope text-xl md:text-2xl lg:text-[26px] uppercase leading-none text-white group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}

      {icon && (
        <img
          src={icon}
          alt="explore icon"
          className="w-7 h-7 md:w-8 md:h-8 transform transition-transform duration-300 group-hover:-rotate-45"
        />
      )}
    </button>
  );
};

export default Button;
