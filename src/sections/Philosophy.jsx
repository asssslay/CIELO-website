import { assetPaths } from "../constants";

const Philosophy = () => {
  return (
    <section className="relative mb-[125px] mr-[112px] pl-[536px] ">
      <h2 className="font-cabinet text-[88px] leading-[98px] mb-9">
        Futuristic & Minimalist.
      </h2>
      <div className="pl-[242px] flex flex-col gap-9">
        <h3 className="font-darker text-[32px] font-bold">Our Philosophy,</h3>
        <p className="font-manrope text-2xl text-ashGray max-w-[528px]">
          You don’t have to worry about the results because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and luxurious style and with premium quality
          materials.
        </p>
      </div>
      <img
        src={assetPaths.philosophy}
        className="absolute left-0 top-[34px] max-w-[608px] max-h-[450px] -z-10"
        alt="Philosophy background"
      />
    </section>
  );
};

export default Philosophy;
