import "./Airquality.css"

const Airquality = () =>{
    return(
        <div className="air-content">
            <div className="air-quality-content">
                <h2 className="air-quality-header">Current air quality <input type="text" placeholder="Enter a location" /></h2>
                <div className="date-content">
                    {/* <p className="day-of-the-week">Today</p>
                    <p className="date">2/2</p> */}

                </div>

            </div>

        </div>
    )
};

export default Airquality;