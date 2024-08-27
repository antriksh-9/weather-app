"use client";

import {WiHumidity} from "react-icons/wi";
import {MdAir} from "react-icons/md";
import {CiTempHigh} from "react-icons/ci";
import {FaEye} from "react-icons/fa";
import {GiCompass, GiWindSlap} from "react-icons/gi";
import {BsSunrise, BsSunset} from "react-icons/bs";

const WeatherDetails = ({data}) => {
  return (
    <>
      <div className="p-12">
        <h1 className="text-2xl font-medium mb-10">Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/60 text-gray-800 font-medium flex items-center justify-center gap-8 rounded-xl">
            <div className="text-xl">
              <h3>Wind Speed</h3>
              <h3>{data.current.wind_kph} kph</h3>
            </div>
            <GiWindSlap fontSize={40}/>
          </div>

          <div className="bg-white/60 text-gray-800 font-medium p-4 flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Humidity</h3>
              <h3>{data.current.humidity} %</h3>
            </div>
            <WiHumidity fontSize={40}/>
          </div>

          <div className="bg-white/60 p-4 text-gray-800 font-medium flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Wind Direction</h3>
              <h3>{data.current.wind_dir}</h3>
            </div>
            <GiCompass fontSize={40}/>
          </div>

          <div className="bg-white/60 p-4 text-gray-800 font-medium flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Sunrise</h3>
              <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
            </div>
            <BsSunrise fontSize={40}/>
          </div>

          <div className="bg-white/60 mt-8 p-4 text-gray-800 font-medium flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Sunset</h3>
              <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <BsSunset fontSize={40}/>
          </div>

          <div className="bg-white/60 mt-8 p-4 text-gray-800 font-medium flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Air pressure</h3>
              <h3>{data.current.pressure_mb} hPa</h3>
            </div>
            <MdAir fontSize={40}/>
          </div>

          <div className="bg-white/60 mt-8 p-4 text-gray-800 font-medium flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Feels Like</h3>
              <h3>{data.current.feelslike_c.toFixed()} °C</h3>
            </div>
            <CiTempHigh fontSize={40}/>
          </div>

          <div className="bg-white/60 mt-8 p-4 text-gray-800 font-medium flex items-center justify-center gap-20 rounded-xl">
            <div className="text-xl">
              <h3>Visibility</h3>
              <h3>{data.current.vis_km} km</h3>
            </div>
            <FaEye fontSize={40}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherDetails