import { assetPaths } from "../constants";

const FoundersNote = () => {
  return (
    <section className="max-container ml-[132px] mt-[272px] mb-[180px] flex flex-row gap-2 relative">
      <div className="flex flex-col gap-8">
        <img src={assetPaths.quotes} className="max-w-12 max-h-12" />
        <p className="max-w-[878px] font-manrope text-2xl leading-[40px]">
          Every piece of furniture that we make is signed by the person who made
          it, and the amount of pride that goes into that signature is
          unbelievable. You know, there are so few people in America today whose
          work is going to be understood and appreciated by their great-great
          grandchildren who have not yet been born. And so we have that
          advantage.
        </p>
      </div>
      <div className="flex gap-8 items-center justify-center absolute bottom-[-60px] right-28">
        <img src={assetPaths.founder} className="max-w-20 max-h-20" />
        <p className="text-2xl font-ubuntu">Leslie Alexander</p>
      </div>
    </section>
  );
};

export default FoundersNote;
