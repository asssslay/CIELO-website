import Button from "../components/Button";
import { assetPaths } from "../constants";

const Hero = () => {
  return (
    <section
      className="relative mb-10 bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${assetPaths.hero})` }}
    >
      <div className="relative z-10 text-white p-8 md:p-20 max-w-container mx-auto flex items-end justify-end h-full">
        <div className="text-left mb-20 ml-10 md:mb-28 md:ml-20 lg:mb-32 lg:ml-24 xl:mb-0 xl:ml-28 2xl:ml-32">
          <h1 className="font-cabinet text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px]">
            You buy a house,
            <br />
            we make it a home.
          </h1>
          <p className="font-manrope text-lg md:text-xl lg:text-2xl mb-10">
            Design is not just what it looks like and feels like.
            {/* <br className="flex md:hidden" />  */}
            Design is how it works.
          </p>
          <Button label="Explore" iconURL={assetPaths.exploreIcon} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
