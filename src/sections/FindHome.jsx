import Button from "../components/Button";
import { assetPaths } from "../constants";

const FindHome = () => {
  return (
    <section
      className="container py-[104px] mb-[120px] relative bg-cover bg-center bg-no-repeat flex flex-col gap-[54px] items-center justify-center text-center"
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
