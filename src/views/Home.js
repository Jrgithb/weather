import "./Home.css"
import { useState } from 'react';


const Home = () => {

    const apiKey = '2ab5644c2bb452e7cb929b6666d8e449'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) =>{
        if (event.key == "Enter"){
            fetch('https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}').then(
                response => response.json()
            ).then(
                data =>{
                    setWeatherData(data)
                }
            )
        }

    }


    return (
        <div className="home-container">
            
                    <div className="search-container" id="search-for-a-place">
                        <h2>find a forecast</h2>
                        <form className="search">

                            <input class="search_input" type="text" name="search" placeholder="Find forecast" onChange={e => setCity(e.target.value)} value={city} onKeyPress={getWeather}/>
                            <button className="search_button" type="submit">Search</button>

                        </form>


                    </div>
                   


                </div>
    )
};

export default Home;