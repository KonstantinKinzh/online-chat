import { InputForm } from "./ui/input-form";
import "./Login.css";


export function Login() {
    return (
        <div className="login">
            <form className="login-form">
                <h2 className="header-form">Авторизация</h2>

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
            </form>
            <div className="underlay-photo"></div>
            <div className="underlay-black"></div>
        </div>
    );
};