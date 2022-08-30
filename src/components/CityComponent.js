import React from 'react'
 
const CityComponent = (props) => {
    const {setCity,fetchWeather} =props;
    return (
        <div>
            <img className='weather-logo' src="icons/perfect-day.svg" /><br />
            <label className='city-lable'>Find weather of your city</label>
            
            <form  className='city-form' onSubmit={fetchWeather} >
            <input type="text"  
            placeholder='Enter your city' 
            className='city-input' 
            onChange={(e)=>setCity(e.target.value)}/>
            <button type='submit' className='city-button'>Search</button>

            </form>       
        </div>
    );
};

export default CityComponent
