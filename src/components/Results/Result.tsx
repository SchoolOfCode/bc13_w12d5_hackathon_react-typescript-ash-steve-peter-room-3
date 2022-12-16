import WeatherTiles from "../WeatherTiles/WeatherTiles";
import "./index.css";

import temperature from "../images/temperature.png";
import wind from "../images/wind.png";
import pressure from "../images/pressure.png";
import humidity from "../images/humidity.png";
//import sun from "../images/sun.png";


type ResultProps = {
    data : any;
    city: string;
}

const Result = (props:ResultProps) => {
    const { data, city } = props

    return (
        <div className="Results">
            <div className="summary">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="current weather"/>
                <p>Summary for {city}: <strong>{data.weather[0].description}</strong></p>
            </div>
            <div className='tiles'>
                <WeatherTiles image={temperature} title="Temperature" data={Math.round((data.main.temp-273)*100)/100} unit={"°C"}/>
                <WeatherTiles image={wind} title="Wind" data={data.wind.speed} unit={"mph"}/>
                <WeatherTiles image={humidity} title="Humidity" data={data.main.humidity} unit={"gm³"}/>
                <WeatherTiles image={pressure} title="Pressure" data={data.main.pressure} unit={"psi"}/>
            </div>
        </div>
    );
}
 
export default Result;