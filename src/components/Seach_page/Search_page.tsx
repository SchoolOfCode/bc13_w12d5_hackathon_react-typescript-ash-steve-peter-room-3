import { useEffect, useState } from 'react';

export default function Search_page(props: any) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`api.openweathermap.org/data/2.5/forecast?q=${props.city}}&appid=7ca83e00916d7d886d1132beb93560f4`);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [props.city]);


  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  } else {
    return <div>Loading...</div>;
  }
}