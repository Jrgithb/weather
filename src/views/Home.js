import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <div className="box">
                <div className="rectangle">
                    <div className="search-container" id="search-for-a-place">
                        <h2>find a forecast</h2>
                        <form className="search">

                            <input class="search_input" type="text" name="search" placeholder="Find forecast" />
                            <button className="search_button" type="submit">Search</button>

                        </form>


                    </div>
                    {/* <p2>Recent searches</p2> */}


                </div>


            </div>

        </div>
    )
};

export default Home;