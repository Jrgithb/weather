import "./Home.css"
import { useState } from 'react';


const Home = () => {

    const apiKey = '2ab5644c2bb452e7cb929b6666d8e449'
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) =>{
        event.preventDefault()
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
                response => response.json()
            ).then(
                data =>{
                    setWeatherData(data)
                    // setCity("")
                }
            )

    }


    return (
        <div className="home-container">
            
                    <div className="search-container" id="search-for-a-place">
                        <h2>find a forecast</h2>
                        <form className="search" onSubmit={getWeather}>

                            <input class="search_input" type="text" name="search" placeholder="Find forecast" onChange={(e) => setCity(e.target.value)} value={city}/>
                            <button className="search_button" type="submit">Search</button>

                        </form>

                        {typeof weatherData?.main === 'undefined' ?(
                            <div></div>
                        ): (
                            <div>
                                <p>{weatherData.name}</p>
                                <p>{Math.round(weatherData.main.temp)}°F</p>
                                <p>{weatherData.weather[0].main}</p>
                            </div>

                        )}

                    </div>
                    
                        


                </div>
    )
};

export default Home;
