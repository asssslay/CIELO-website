import BenefitsList from "../components/BenefitsList";
import { assetPaths } from "../constants";

const Benefits = () => {
  return (
    <section className="container flex gap-[60px] mb-[100px]">
      <img src={assetPaths.benefits} className="max-w-full max-h-full" />
      <div className="flex flex-col gap-10">
        <h2 className="font-cabinet text-[81px] leading-none">
          Benefits you get
          <br />
          when our services.
        </h2>
        <BenefitsList />
      </div>
    </section>
  );
};

export default Benefits;
