import "./index.css"

type WeatherTilesProps = {
    image: string;
    title: string;
    data: number;
}

const WeatherTiles = (props:WeatherTilesProps) => {
    const {image, title, data} = props
    return (
        <div className={title}>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{data}</p>
        </div>
    );
}
 
export default WeatherTiles;