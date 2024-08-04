import { assetPaths } from "../constants";
import BenefitsList from "../components/BenefitsList";

const Benefits = () => {
  return (
    <section className="container flex gap-4 xs:gap-8 md:gap-12 lg:gap-[60px] mb-[100px] padding-left xl:pl-8 2xl:padding-left">
      <img src={assetPaths.benefits} className="benefits-img" />
      <div className="flex flex-col gap-7 xs:gap-8 md:gap-9 lg:gap-10">
        <h2 className="font-cabinet text-2xl xs:text-3xl md:text-[42px] lg:text-7xl xl:text-[80px] leading-none ">
          Benefits you get
          <br className="max-xl:hidden" /> when our services.
        </h2>
        <BenefitsList />
      </div>
    </section>
  );
};

export default Benefits;
