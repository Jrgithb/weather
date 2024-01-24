import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="Login">
            <div className="Login-container">
            <h3>Login</h3>
            <form className="Login-form">
                <label>Email</label>
                <input type="email" placeholder="enter your email" required />
                <label>Password</label>
                <input type="password" placeholder="enter your password" required />
                <input type="button" value="submit" />

            </form>
            <p4 className="para">Not have an account already? </p4>
            <a href="Register.js" onclick = {() => navigate("/Register")}>Sign Up Here</a>
            </div>

        </div>
    )
};

export default Login;