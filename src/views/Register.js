import "./Register.css"

const Register = () =>{
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
                    <input type="button" value="submit" />
                </form>
                <p3>Already have an account? <a href="#">Login here</a></p3>

            </div>
        </div>
    )
};

export default Register;