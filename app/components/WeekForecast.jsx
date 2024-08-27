"use client";

const WeekForecast = ({data}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day,ind) => (
        <div key={ind} className="bg-white/40 p-2 justify-center rounded-lg flex flex-col items-center">
          <p className="text-gray-800 font-semibold">{new Date(day.date).toLocaleString("en-US", {weekday: "short"})}</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div>
            <p>Max: {day.day.maxtemp_c.toFixed()} °C</p>
            <p>Min: {day.day.mintemp_c.toFixed()} °C</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WeekForecast;