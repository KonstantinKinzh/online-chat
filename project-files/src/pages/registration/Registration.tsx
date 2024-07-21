import { useGetDataForm } from "./hooks/useGetDataForm";
import { useRegistrationUser } from "./hooks/useRegistrationUser";
import { LogoForm } from "./ui/logo-form";
import { InputForm } from "./ui/input-form";
import { useNavigate } from "react-router-dom";
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
                    className="login-submit"
                    value="Register"
                >
                    Register
                </button>
            </form>

            <div className="underlay-photo"></div>
            <div className="underlay-black"></div>
        </div>
    );
};