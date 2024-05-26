import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginEmail, loginGoogle } from "../connections/userService";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async () => {
        try {
            await loginEmail(input.email, input.password);
            navigate("/");
        } catch (err) {
            setError(err.message); // Capture and set the error message
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginGoogle();
            navigate("/");
        } catch (err) {
            setError(err.message); // Capture and set the error message
        }
    };

    return (
        <div>
            <section className="page-title">
                <article>
                    <p className="title-large">Log in/ Sign in</p>
                </article>
            </section>
            <main className="login-form">
                <div className="login-form">
                    <label htmlFor="email"><b>E-mail</b></label>
                    <input
                        id="email"
                        name="email"
                        className="textbox"
                        onChange={handleChange}
                        value={input.email}
                    />
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="textbox"
                        onChange={handleChange}
                        value={input.password}
                    />
                    <br />
                    <button className="button primary" onClick={handleSubmit}>
                        Login with E-mail
                    </button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <Link to="/sign-up">Create an account</Link>
                </div>
                <hr style={{ width: "30%" }} />
                <br />
                <button className="button primary" onClick={handleGoogleLogin}>
                    Login with Google
                </button>
            </main>
        </div>
    );
};

export default Login;
