import { assetPaths } from "../constants";

const UsedMaterials = () => {
  return (
    <section className="container mb-[144px]">
      <h3 className="font-cabinet tracking-tight text-7xl mb-14">
        We use quality and
        <br />
        simple materials
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-11">
        <div className="flex flex-col gap-6">
          <img src={assetPaths.woodMaterial} className="" />
          <p className="text-base xs:text-lg md:text-xl xl:text-2xl font-manrope">
            Natural wood
          </p>
        </div>
        <div className="flex flex-col gap-6 md:row-span-2 md:self-end">
          <img src={assetPaths.leatherMaterial} className="" />
          <p className="text-base xs:text-lg md:text-xl xl:text-2xl font-manrope">
            Leather
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <img src={assetPaths.playMaterial} className="" />
          <p className="text-base xs:text-lg md:text-xl xl:text-2xl font-manrope">
            Play wood
          </p>
        </div>
        <div className="flex flex-col gap-6 md:row-span-2 md:self-end">
          <img src={assetPaths.metalMaterial} className="" />
          <p className="text-base xs:text-lg md:text-xl xl:text-2xl font-manrope">
            Metal
          </p>
        </div>
      </div>
    </section>
  );
};

export default UsedMaterials;
