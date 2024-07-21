import { LogoForm } from "./ui/logo-form";
import { InputForm } from "./ui/input-form";
import "./Registration.css";


export function Registration() {
    return (
        <div className="registration">
            <form className="registration-form">
                <LogoForm />

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
                    value="Register"
                />
            </form>
            <div className="underlay-photo"></div>
            <div className="underlay-black"></div>
        </div>
    );
};