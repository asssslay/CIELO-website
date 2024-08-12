import Button from "../components/Button";
import { assetPaths } from "../constants";

const FindHome = () => {
  return (
    <section
      className="container py-[104px] mb-[120px] relative flex flex-col gap-5 xs:gap-7 md:gap-10 lg:gap-[54px] 2xl:gap-16 items-center justify-center text-center"
      style={{ backgroundColor: "#82441E" }}
    >
      <img
        src={assetPaths.backgroundCTA1}
        alt="Background"
        className="absolute w-full object-cover bottom-0"
      />
      <h2 className="h2-custom text-white font-cabinet relative z-10">
        Let’s Find Your
        <br />
        Dream Home
      </h2>
      <Button
        label="Get In Touch"
        iconURL={assetPaths.exploreIcon}
        newIconURL={assetPaths.exploreIconNew}
        className={
          "font-darker font-semibold text-sm xs:text-base md:text-lg  lg:text-[22px] 2xl:text-3xl relative z-10"
        }
      />
    </section>
  );
};

export default FindHome;
