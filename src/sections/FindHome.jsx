import Button from "../components/Button";
import { assetPaths } from "../constants";

const FindHome = () => {
  return (
    <section
      className="container py-[104px] mb-[120px] relative bg-cover bg-center bg-no-repeat flex flex-col gap-5 xs:gap-7 md:gap-10 lg:gap-[54px] 2xl:gap-16 items-center justify-center text-center"
      style={{ backgroundImage: `url(${assetPaths.backgroundCTA})` }}
    >
      <h2 className="h2-custom text-white font-cabinet">
        Let’s Find Your
        <br />
        Dream Home
      </h2>
      <Button
        label="Get In Touch"
        iconURL={assetPaths.exploreIcon}
        newIconURL={assetPaths.exploreIconNew}
        className={"font-darker font-semibold"}
      />
    </section>
  );
};

export default FindHome;
