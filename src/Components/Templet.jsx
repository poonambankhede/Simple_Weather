import React from 'react'
import { useEffect, useState } from 'react'
import { FaStreetView } from "react-icons/fa";
import "./Templet.css"
const Templet = () => {
  const [city, setCity] = useState(null)
  const [Search, setSearch] = useState("indore")
  useEffect(() => {
    const fetchApi = async () => {
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid={6ebafee37e314ee4abea08f6192b55be}`

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=d50b62d44387a21d0a46c8f4be982d54`
      const response = await fetch(url);
      const resjson = await response.json();

      setCity(resjson.main);
    };
    fetchApi();

  }, [Search])

  return (<>
    <div className='Box'>
      <div className='inputData'>
        <input type="Search"
          value={Search}
          className='inputFeild' onChange={(event) => {
            setSearch(event.target.value)

          }} />
      </div>
      {!city ? (
        <p className='errorMsg'>No Data Found</p>
      ) : (
<div>
      <div className='info'>
        <h2 className='location'>
         <i className='weathericon' >
     < FaStreetView/>
          </i>
       <span2> {Search}</span2>
      </h2>
    </div>
      <div className='bottom'>
      <h1 className='temp'>
{city.temp}°Cel
      </h1><h5 className='tempmin_max'> Min:{city.temp_min}°Cel|Max:{city.temp_min}°Cel
      </h5>
</div>
      </div>)}
  </div>
      </>
  )     
}


export default Templet;
