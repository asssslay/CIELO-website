const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 font-manrope text-xl md:text-2xl lg:text-[26px] uppercase leading-none text-white">
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="explore icon"
          className="w-7 h-7 md:w-8 md:h-8"
        />
      )}
    </button>
  );
};

export default Button;
