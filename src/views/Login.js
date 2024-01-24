import "./Login.css"

const Login = () => {
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
            <p4 className="para">Not have an account already? <a href="Register.js">Sign Up Here</a></p4>
            </div>

        </div>
    )
};

export default Login;