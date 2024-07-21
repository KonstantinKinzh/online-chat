import { Link } from "react-router-dom";
import { InputForm } from "./ui/input-form";
import { Background } from "./ui/background"
import "./Login.css";


export function Login() {
    return (
        <div className="login">
            <form className="login-form">
                <h2 className="header-form">Authorization</h2>
                <InputForm
                    type="email"
                    placeholder="Email"
                />
                <InputForm
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="submit"
                    className="login-submit"

                    name="Login"
                    value="Sign in"
                />
                <Link
                    className="sign-up"
                    to="/registration">
                    Sign up
                </Link>
            </form>
            <Background />
        </div>
    );
};