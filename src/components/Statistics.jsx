import { statistics } from "../constants/index";

const Statistics = () => {
  return (
    <div className="flex justify-around">
      {statistics.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-brown-500">{stat.value}</div>
          <div className="text-xl text-gray-700">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
