import { useEffect, useState } from "react";
import axios from 'axios'
import Result from "../Results/Result";
import './index.css'

export default function SearchPage() {
	const [data, setData] = useState(null);
	const [inputText, setInputText] = useState('');
	const [location, setLocation] = useState('');

	useEffect(() => {
		async function getWeather() {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b11b706c0bdb85fd3b45ecc8262901f9
			`);
			const data = await response.json();
			console.log(data.cod)
				if (data.cod !== 200) {
					return;
				}
				setData(data);	
		}
		getWeather();
	}, [location]);

	const getData = async () => {
	const res = await axios.get('https://geolocation-db.com/json/')
	//console.log(res.data);
	setLocation(res.data.city)
	}
	useEffect( () => {
	getData()
	}, [])


	const handleClick = (e: any) => {
		e.preventDefault();
		setLocation(inputText);
	}


	return (
		<div>
			<form action="submit">
				<input type="text" value={inputText}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInputText(e.target.value)}} />
				<button onClick={handleClick}>Search</button>
			</form>
			{data && <Result data={data} city={location}/>}
		</div>
	)
}
