import { assetPaths } from "../constants";

const Philosophy = () => {
  return (
    <section className="container relative mb-[125px]  ">
      <div className="flex justify-center w-full">
        <h2 className="h2-custom leading-[98px] mb-9">
          Futuristic &<br />
          Minimalist.
        </h2>
      </div>
      <div className="flex flex-col gap-9 mr-[112px] ml-0 sm:ml-[100px] md:ml-[400px] lg:ml-[500px] xl:ml-[780px]">
        <h3 className="font-darker text-xs xs:text-[32px] font-bold">
          Our Philosophy,
        </h3>
        <p className="font-manrope text-2xl text-ashGray max-w-[528px] leading-9">
          You don’t have to worry about the results because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style and with premium quality
          materials.
        </p>
      </div>
      <img
        src={assetPaths.philosophy}
        className="absolute left-0 top-[34px] max-w-80 xl:max-w-[608px] max-h-[450px] -z-10"
        alt="Philosophy background"
      />
    </section>
  );
};

export default Philosophy;
