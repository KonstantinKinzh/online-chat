import { Link, useNavigate } from "react-router-dom";
import { useGetDataForm } from "@/shared/hooks/useGetDataForm";
import { login } from "@/firebase/login";
import { InputForm } from "./ui/input-form";
import { Background } from "./ui/background"
import "./Login.css";


export function Login() {
    const navigate = useNavigate();
    const { email, password, getEmailValue, getPasswordValue } = useGetDataForm();

    return (
        <div className="login">
            <form
                className="login-form"
                onSubmit={(e) => {
                    e.preventDefault(),
                        login(email, password),
                        navigate("/chat");
                }}>
                <h2 className="header-form">Authorization</h2>
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