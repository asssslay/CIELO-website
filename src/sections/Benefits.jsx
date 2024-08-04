import { assetPaths } from "../constants";
import BenefitsList from "../components/BenefitsList";

const Benefits = () => {
  return (
    <section className="container flex gap-[60px] mb-[100px] padding-left xl:pl-8 2xl:padding-left">
      <img
        src={assetPaths.benefits}
        className="max-w-44 max-h-48 xs:max-h-[270px] sm:max-w-64 sm:max-h-[360px] md:max-w-[325px] md:max-h-[450px] lg:max-w-[425px] lg:max-h-[600px] xl:max-w-[525px] xl:max-h-[690px]"
      />
      <div className="flex flex-col gap-10">
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
