const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 font-manrope text-[26px] uppercase leading-none text-white">
      {label}

      {iconURL && <img src={iconURL} alt="explore icon" className=" w-8 h-8" />}
    </button>
  );
};

export default Button;
