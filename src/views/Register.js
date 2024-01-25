import { useNavigate } from "react-router-dom";
import "./Register.css"

const Register = () =>{

    const navigate = useNavigate();


    return(
        <div className="register">
            <div className="form-container">
                <h2>Sign up</h2>
                <form className="register-form">
                    <label>First Name</label>
                    <input type="text"  placeholder="enter your first name" required />
                    <label>Last Name</label>
                    <input type="text" placeholder="enter your Last name" required />
                    <label>Email</label>
                    <input type="email" placeholder="enter your email" required />
                    <label>Password</label>
                    <input type="password" placeholder="enter your password" required />
                    <label>Confirm password</label>
                    <input type="password" placeholder="enter your password" required />
                    <button className="register-btn">Submit</button>
                </form>
                {/* <p3 className="para">Already have an account? </p3>  */}
                {/* <a href="Login.js" onclick = {() => navigate("/Login")}>Login here</a> */}
                <button className="reg-btn-link" onClick={() => navigate("/Login")}>Already have an account? Login</button>

            </div>
        </div>
    )
};

export default Register;