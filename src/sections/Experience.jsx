import Statistics from "../components/Statistics";
import { assetPaths } from "../constants";

const Experience = () => {
  return (
    <section className="relative flex container">
      <div className="mt-16 xs:mt-24 md:mt-32 lg:mt-[156px] padding-left mr-8 z-10">
        <h2 className="h2-custom mb-10">
          We provide you the
          <br />
          best experience.
        </h2>
        <Statistics />
      </div>
      <img
        className="hidden md:flex md:absolute right-12 top-10 md:top-32 lg:top-[164px] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[608px] max-h-[650px]"
        src={assetPaths.experience}
        alt="Experience background"
      />
    </section>
  );
};

export default Experience;
