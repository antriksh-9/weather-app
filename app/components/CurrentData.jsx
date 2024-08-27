import { CurrentDate } from "../utils/CurrentDate";
import {MdLocationOn} from "react-icons/md";

const CurrentData = ({ data }) => {
  const weatherIcon = data.current.condition.icon;
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl">Today</h1>
          <div className="text-blue-400"><CurrentDate /></div>
        </div>
        <div>
          <img
            src={weatherIcon}
            alt={data.current.condition.text}
            className="w-[80px] ml-5 text-3xl"
          />
        </div>
      </div>
      <div>
        <p className="text-5xl text-blue-400">{data.current.temp_c.toFixed()} °C</p>
        <span>{data.current.condition.text}</span>
      </div>
      <div className="font-medium flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
        <MdLocationOn />
        <span>
          {data.location.name}, {data.location.region}
        </span>
      </div>
    </div>
  );
};

export default CurrentData;
