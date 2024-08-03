import { benefits } from "../constants/index";

const BenefitsList = () => {
  return (
    <div>
      {benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col gap-4 mb-8">
          <h5 className="font-darker font-bold text-3xl 2xl:text-4xl">
            {benefit.title}
          </h5>
          <p className="desc-custom">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
