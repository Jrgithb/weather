import "./Home.css"

const Home = () => {
    return (
        <div>
            <div className="box">
                <div className="rectangle">
                    <h1>Find a forecast</h1>
                    <div className="search container" id="search for a place">
                        <form>
                            <div>
                                <input class="search_input" type="text" name="search" placeholder="Enter your city or postcode" />
                                <button className="search_button" type="submit">Search</button>

                            </div>

                        </form>

                    </div>

                </div>


            </div>

        </div>
    )
};

export default Home;