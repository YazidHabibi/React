import axios from "axios";
import { useEffect, useState } from "react";

export default function Cuaca() {

    const [cuaca, setCuaca] = useState({});

    useEffect(() => {
        axios
            .get("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true")
            .then((response) => {
                setCuaca(response.data.current_weather);

                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error Fetching Data", error);
            });
    }, []);

    return (
        <div>
            <h1 className="text-center mt-7 text-2xl">Data Cuaca</h1>
            <div className="m-5 border-2 rounded-lg shadow-md text-center">
            <h2>Cuaca Di London</h2>
            <li>Temperature: {cuaca.temperature} °C</li>
            <li>Wind Speed: {cuaca.windspeed} m/s</li>
            </div>
        </div>
    )
}   