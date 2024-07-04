import Button from "../components/Button";
import { assetPaths } from "../constants";

const Hero = () => {
  return (
    <section className="relative mb-10 max-container overflow-hidden">
      <img
        src={assetPaths.hero}
        alt="photo"
        className="w-full h-screen object-cover"
      />

      <div className="absolute bottom-[88px] right-20 text-white">
        <h1 className="font-cabinet text-[120px]">
          You buy a house,
          <br />
          we make it a home.
        </h1>

        <p className="font-manrope text-2xl mb-10">
          Design is not just what it looks like and feels like. Design is how it
          works.
        </p>

        <Button label="Explore" iconURL={assetPaths.exploreIcon} />
      </div>
    </section>
  );
};

export default Hero;
