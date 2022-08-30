import React from 'react'
export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    Temp: "/icons/temp.svg",
    Humidity: "/icons/humidity.svg",
    Wind: "/icons/wind.svg",
    Pressure: "/icons/pressure.svg",
};
 
const WeatherComponent = (props) => {

    const {weather} = props;
    let Weatherinfocomponent = (props) =>{
        const {name ,value} =props;
        return(
            <div className='info-container'>
                <img src={WeatherInfoIcons[name]} id='img' className='info-icon'/>
                <label htmlFor="img" className='info-lable'>{value} <span id='info-span'>{name}</span></label>
            </div>
        )
    }
    return (
        <div className='weather'>
            <div className='weather-page-container'>
                <p className='weather-celcious'>
                    <span className='weather-span'> {`${Math.floor(weather?.main?.temp - 273)} °C`} </span> 
                    {`| ${weather?.weather[0].description}`}</p>  
                <img className='weather-logo1' src="icons/perfect-day.svg" /><br />
            </div>
            <div>
                <p className='weather-location'> {`${weather?.name},${weather?.sys?.country}`}</p>
                <label className="weather-info"> Weather Info</label>
                <div className='weather-info-container'>
                    {/* <Weatherinfocomponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/> */}
                    <Weatherinfocomponent name="Humidity" value ={weather?.main?.humidity}/>
                    <Weatherinfocomponent name="Wind" value={weather?.wind?.speed}/>
                    <Weatherinfocomponent name="Pressure" value={weather?.main?.pressure}/>
                    <Weatherinfocomponent name="Temp" value={weather?.main?.temp_min}/>
                </div>
            </div>
        </div>
    );
};

export default WeatherComponent