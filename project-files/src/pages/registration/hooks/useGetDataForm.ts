import { useState } from "react";

export const useGetDataForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmailValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        console.log(email);
    };

    const getPasswordValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(password);
    };

    return {
        email,
        password,
        getEmailValue,
        getPasswordValue
    };
};