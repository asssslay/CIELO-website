import { assetPaths } from "../constants";

const FoundersNote = () => {
  return (
    <section className="container mt-28 xs:mt-36 md:mt-[272px] mb-[180px] flex flex-row gap-2 relative">
      <div className="padding-left">
        <div className="flex flex-col gap-8">
          <img src={assetPaths.quotes} className="max-w-12 max-h-12" />
          <p className="max-w-62ch desc-custom font-manrope">
            Every piece of furniture that we make is signed by the person who
            made it, and the amount of pride that goes into that signature is
            unbelievable. You know, there are so few people in America today
            whose work is going to be understood and appreciated by their
            great-great grandchildren who have not yet been born. And so we have
            that advantage.
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center absolute bottom-[-70px] right-8">
          <img
            src={assetPaths.founder}
            className="max-w-10 max-h-10 xs:max-w-12 xs:max-h-12 md:max-w-14 md:max-h-14 lg:max-w-16 lg:max-h-16 xl:max-w-20 xl:max-h-20"
            alt="Founder photo"
          />
          <p className="desc-custom font-ubuntu">Leslie Alexander</p>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
