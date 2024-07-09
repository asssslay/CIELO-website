import Statistics from "../components/Statistics";
import { assetPaths } from "../constants";

const Experience = () => {
  return (
    // <div className="">g</div>
    <section className="relative flex max-container  items-center">
      <div className="mt-[156px] ml-[132px] max-w-[742px] z-10">
        <h2 className="font-cabinet text-2xl md:text-4xl lg:text-6xl 2xl:text-[88px] mb-6">
          We provide you the
          <br />
          best experience.
        </h2>
        <Statistics />
      </div>
      <img
        // className="mt-16 max-w-[608px] max-h-[650px]"
        className="absolute right-12 top-[164px] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[608px] max-h-[650px]"
        src={assetPaths.experience}
      />
    </section>
  );
};

export default Experience;
