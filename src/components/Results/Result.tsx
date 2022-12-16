import WeatherTiles from "../WeatherTiles/WeatherTiles";
import "./index.css";

type ResultProps = {
    data : any;
}

const Result = (props:ResultProps) => {
    const {data} = props
    return (
        <div className="Results">
            <img src={`http://openweathermap.org/img/wn/${data.list[0].weather.icon}@2x.png`} alt="current weather"/>
            <p>{data.list[0].weather.description}</p>
            <WeatherTiles image={"../images/temperature"} title="Temperature" data={data.list[0].main.temp-273}/>
            <WeatherTiles image={"../images/wind"} title="Wind" data={data.list[0].wind.speed}/>
            <WeatherTiles image={"../images/humidity"} title="Humidity" data={data.list[0].main.humidity}/>
            <WeatherTiles image={"../images/pressure"} title="Pressure" data={data.list[0].main.pressure}/>
            
        </div>
    );
}
 
export default Result;