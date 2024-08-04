import Button from "../components/Button";
import { assetPaths } from "../constants";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${assetPaths.hero})` }}
    >
      <div className="relative z-10 text-white pb-20 md:pb-[88px] container mx-auto flex items-end justify-end h-full">
        <div className="text-left ml-10 md:ml-20 lg:ml-24 xl:ml-28 2xl:ml-32 ">
          <h1 className="font-cabinet text-[40px] md:text-6xl lg:text-[88px] xl:text-[100px] 2xl:text-[120px]">
            You buy a house,
            <br />
            we make it a home.
          </h1>
          <p className="desc-custom font-manrope lg:mt-9 mb-10 mt-4">
            Design is not just what it looks like and feels like. Design is how
            it works.
          </p>
          <Button
            label="Explore"
            iconURL={assetPaths.exploreIcon}
            newIconURL={assetPaths.exploreIconNew}
            className="font-manrope uppercase"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
