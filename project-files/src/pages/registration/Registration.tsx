import { useGetDataForm } from "../../shared/hooks/useGetDataForm";
import { useRegistrationUser } from "./hooks/useRegistrationUser";
import { LogoForm } from "./ui/logo-form";
import { InputForm } from "./ui/input-form";
import { Background } from "./ui/background";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css";


export function Registration() {
    const navigate = useNavigate();
    const { email, password, getEmailValue, getPasswordValue } = useGetDataForm();
    const { handleRegister } = useRegistrationUser(email, password);

    return (
        <div className="registration">
            <form
                className="registration-form"
                onSubmit={() => { handleRegister(), navigate("/chat") }}>
                <LogoForm />
                <InputForm
                    type="email"
                    placeholder="Email"
                    onChange={getEmailValue}
                    value={email}
                />
                <InputForm
                    type="password"
                    placeholder="Password"
                    onChange={getPasswordValue}
                    value={password}
                />
                <button
                    type="submit"
                    className="registration-submit"
                    value="Register"
                >
                    Register
                </button>
                <Link
                    className="sign-in"
                    to="/">
                    Sign in
                </Link>
            </form>
            <Background/>
        </div>
    );
};