import { useEffect, useState } from "react";
import Result from "../Results/Result";

export default function SearchPage() {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getWeather() {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=b11b706c0bdb85fd3b45ecc8262901f9
			`);
			const data = await response.json();
			setData(data);
		}
		getWeather();
	}, []);



	return (data && <Result data={data} />)
}
