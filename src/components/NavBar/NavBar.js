import "./NavBar.css"
import { useNavigate } from "react-router-dom";

const NavButton = ({ text, path }) => {
    const navigate = useNavigate()

    return (
        <button className="nav-button" onClick={() => navigate(path)}>
            {text}
        </button>
    )
}

const NavBar = () => {
    return (
        <div className="Nav-container">
            <img src="https://classroomclipart.com/image/static7/preview2/snowflake-intricate-pattern-clip-art-59075.jpg" />
            <h1>Health Advice Group</h1>

            <div className="nav-buttons">

                {/* <NavButton text="Find a forecast" path="/Find a forecast" /> */}
                <NavButton text="Home" path="/" />
                <NavButton text="Warning and advice" path="/Warning and advice" />
                <NavButton text="Air quality" path="/Air quality" />
                <div className="auth-buttons">
                    <NavButton text="Sign in" path="/Sign in" />
                    <NavButton text="Register" path="/Register" />
                </div>
            </div>


        </div>
    );
};

export default NavBar;