import Statistics from "../components/Statistics";
import { assetPaths } from "../constants";

const Experience = () => {
  return (
    <section className="relative flex max-container">
      <div className="mt-[156px] ml-16 lg:ml-[132px] z-10">
        <h2 className="font-cabinet text-2xl md:text-5xl lg:text-7xl xl:text-[88px] 2xl:text-8xl mb-10">
          We provide you the
          <br />
          best experience.
        </h2>
        <Statistics />
      </div>
      <img
        className="hidden md:flex md:absolute right-12 top-[164px] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[608px] max-h-[650px]"
        src={assetPaths.experience}
        alt="Experience background"
      />
    </section>
  );
};

export default Experience;
