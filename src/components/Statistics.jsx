import { statistics } from "../constants/index";

const Statistics = () => {
  return (
    <div className="flex justify-between  w-full">
      {statistics.map((stat, index) => (
        <div key={index} className="text-left ">
          <div className="text-[108px] text-rusticBrown font-cabinet mb-8">
            {stat.value}
          </div>
          <div className="text-2xl font-manrope">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
