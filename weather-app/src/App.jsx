import { useState,useEffect } from 'react'
import './App.css'
import  Weathercard  from './components/Weathercard'
import cities from './data/cities.json'




function App() {
  const apikey = 'ec45bdc642e7c4a96bf7bd77fa71b25b'; 
  const api ='https://api.openweathermap.org/data/2.5/weather';

  const [Weatherdata, setWeatherdata] = useState([])


  const fetchWeather = async (city) =>{
    try {
      const response = await fetch(`${api}?q=${city}&appid=${apikey}&units=metric`);
      if (!response.ok) throw new Error("City Not Found!!!");
      const data = await response.json()
      return{
        city: data.name,
        Temperature: data.main.temp 

      }
      
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  useEffect(() => {
    const fetchAllcities = async () =>{
      const promises = cities.map((city) => fetchWeather(city.city))
      const result = await Promise.all(promises)
      setWeatherdata(result.filter((data) => data))
      }


      fetchAllcities();
  
  }, [])
  


  return (
    <>
    {/* {cities.map((city) => (
      <Weathercard city={city.city} Temperature={city.Temperature} Weather={city.Weather}/>
    ))} */}
    {console.log(Weatherdata)
    }

     {Weatherdata.map((city,index) => (
      <Weathercard key = {index} 
      city={city.city} 
      Temperature={city.Temperature} 
      Weather={city.Weather}/>
    ))}
    </>
  )
}

export default App


