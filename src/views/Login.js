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
                <button className="login-btn">Submit</button>

            </form>
            {/* <p4 className="para">Not have an account already? 
            <a href="register.js" onclick = {() => navigate("/Register")}>Sign Up Here</a></p4> */}
            <button className="reg-btn-link" onClick={() => navigate("/Register")}>Don't have an account? Register</button>
            
            </div> 

        </div>
    )
};

export default Login;