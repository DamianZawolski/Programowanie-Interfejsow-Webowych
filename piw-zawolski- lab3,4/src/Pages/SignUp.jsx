import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerEmail } from "../connections/userService";

const SignUp = () => {
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
            await registerEmail(input.email, input.password);
            navigate("/");
        } catch (err) {
            setError(err.message); // Capture and set the error message
        }
    };

    return (
        <div>
            <section className="page-title">
                <article>
                    <p className="title-large">Fill in your offer details</p>
                </article>
            </section>
            <main className="register-form">
                <div className="register-form">
                    <label htmlFor="email"><b>E-mail</b></label>
                    <input
                        name="email"
                        className="textbox"
                        onChange={handleChange}
                        value={input.email}
                    />
                    <label htmlFor="password"><b>Password</b></label>
                    <input
                        name="password"
                        type="password"
                        className="textbox"
                        onChange={handleChange}
                        value={input.password}
                    />
                    <br />
                    <button className="button primary" onClick={handleSubmit}>
                        Register with E-mail
                    </button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            </main>
        </div>
    );
};

export default SignUp;
