import Statistics from "../components/Statistics";
import { assetPaths } from "../constants";

const Experience = () => {
  return (
    // <div className="">g</div>
    <section className="relative flex max-container gap-8">
      <div className="mt-[156px] ml-16 lg:ml-[132px] max-w-[742px] z-10 ">
        <h2 className="font-cabinet text-2xl md:text-4xl lg:text-6xl xl:text-[88px] 2xl:text-8xl mb-10">
          We provide you the
          <br />
          best experience.
        </h2>
        <Statistics />
      </div>
      <img
        className="mt-[164px] max-w-[480px] xl:max-w-[480px] max-h-[650px]"
        src={assetPaths.experience}
      />
    </section>
  );
};

export default Experience;
