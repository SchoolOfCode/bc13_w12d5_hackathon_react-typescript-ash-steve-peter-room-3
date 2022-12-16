import "./index.css"

type WeatherTilesProps = {
    image: string;
    title: string;
    data: number;
    unit: string;
}

const WeatherTiles = (props:WeatherTilesProps) => {
    const {image, title, data, unit} = props
    return (
        <div className={title}>
            <img src={image} alt="weather"/>
            <h3>{title}</h3>
            <p>{data} {unit}</p>
        </div>
    );
}
 
export default WeatherTiles;