import { assetPaths } from "../constants";

const FoundersNote = () => {
  return (
    <section className="mb-[180px] flex flex-row">
      <div className="">
        <img src={assetPaths.quotes} />
        <p className="">
          Every piece of furniture that we make is signed by the person who made
          it, and the amount of pride that goes into that signature is
          unbelievable. You know, there are so few people in America today whose
          work is going to be understood and appreciated by their great-great
          grandchildren who have not yet been born. And so we have that
          advantage.
        </p>
      </div>
      <div className="">
        <img src={assetPaths.founder} className="" />
        <p>Leslie Alexander</p>
      </div>
    </section>
  );
};

export default FoundersNote;
