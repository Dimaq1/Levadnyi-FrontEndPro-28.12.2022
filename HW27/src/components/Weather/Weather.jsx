import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react"
import { setWeather } from "../../store/slices/weatherSlice";


const Weather = () => {
  const weather = useSelector(state => state.weather)
  const dispatch = useDispatch()


  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
      const data = await res.json()
      dispatch(setWeather(data))
    }

    getWeather()
  }, [dispatch])

  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Pressure: {weather.main.pressure}</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Speed: {weather.wind.speed} m/s</p>
          <p>Deg: {weather.wind.deg}°</p>
          <img
            src={`http://openweathermap.org/img/w/10d.png`}
            alt="Weather Icon"
          />
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  )
}

export default Weather