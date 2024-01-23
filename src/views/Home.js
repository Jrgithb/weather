import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="box">
                <div className="rectangle">
                    <p>Find a forecast</p>
                    <div className="search container" id="search for a place">
                        <form>
                            <div>
                                <input class="search_input" type="text" name="search" placeholder="Enter your city or postcode" />
                                <button className="search_button" type="submit">Search</button>

                            </div>

                        </form>
                        

                    </div>
                    <p2>Recent searches</p2>


                </div>


            </div>

        </div>
    )
};

export default Home;