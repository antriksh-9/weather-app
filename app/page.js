"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentData from "./components/CurrentData";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import Loading from "./components/Loading";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7`;

  const handleSearch = async (e) => {
    if(e.key==="Enter"){
      e.preventDefault();
      isLoading(true);
      try {
        const res=await axios.get(url);
        setData(res.data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found!");
        setData({});
      }
      finally {
        isLoading(false);
      }
    }
  };


  let content;
  if(loading){
    content = (
      <div className="h-screen">
        <Loading /> 
      </div>
    )
  }
  else if(Object.keys(data).length === 0 && error===""){
    content = (
      <div className="items-center justify-center text-center mt-24 p-12 h-screen">
        <h2 className="text-3xl font-bold mb-2 tracking-widest">Welcome to the Weather App</h2>
        <p className="text-lg tracking-wide">Enter a city name to get the weather forecast</p>
      </div>
    );
  }
  else if(error!==""){
    content = (
      <div className="items-center justify-center text-center mt-24 p-12 h-screen">
        <p className="text-3xl font-bold mb-2 tracking-wider">City not found!</p>
        <p className="text-lg tracking-wide">Enter a valid city</p>
      </div>
    );
  }
  else{
    content = (
      <>
      <div className="flex md:flex-row flex-col p-12 items-center justify-between">
        <CurrentData data={data}/>
        <WeekForecast data={data}/>
      </div>  
      <div>
        <WeatherDetails data={data}/>
      </div>  
      </>
    );
  }
  return (
    <div className="bg-cover bg-gradient-to-r from-gray-900 to-gray-600 h-fit">
      <div className="w-full h-full flex flex-col text-white">
        <div className="flex flex-col items-center justify-between p-12 md:flex-row">
          <SearchBar handleSearch={handleSearch} setLocation={setLocation} /> 
          <h1 className="mb-8 md:mb-0 order-1 py-2 px-4 rounded-xl text-[20px] md:text-[25px] font-semibold italic tracking-widest">Weather App.</h1>
        </div>
        {content}
      </div>
    </div>
  );
}
