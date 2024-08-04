import { benefits } from "../constants/index";

const BenefitsList = () => {
  const getMaxWidthClass = (index) => {
    switch (index) {
      case 0:
        return "max-w-30ch";
      case 1:
        return "max-w-29ch";
      case 2:
        return "max-w-31ch";
      default:
        return "";
    }
  };

  return (
    <div>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex flex-col gap-1 xs:gap-2 md:gap-3 lg:gap-4 mb-4 xs:mb-5 md:mb-6 lg:mb-8"
        >
          <h5 className="font-darker font-bold text-sm xs:text-base md:text-lg lg:text-2xl xl:text-3xl">
            {benefit.title}
          </h5>
          <p
            className={`text-neutralGray text-xs xs:text-sm md:text-base lg:text-xl xl:text-2xl ${getMaxWidthClass(
              index
            )}`}
          >
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
