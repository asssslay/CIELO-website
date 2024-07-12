import { statistics } from "../constants/index";

const Statistics = () => {
  return (
    <div className="flex justify-between w-full gap-10 md:gap-16 xl:gap-[88px]">
      {statistics.map((stat, index) => (
        <div key={index} className="text-left">
          <div className="text-7xl md:text-8xl xl:text-[108px] text-rusticBrown font-cabinet mb-8">
            {stat.value}
          </div>
          <div className="text-lg md:text-xl xl:text-2xl font-manrope">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
