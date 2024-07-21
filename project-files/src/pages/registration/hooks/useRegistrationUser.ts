import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useRegistrationUser = (email: string, password: string) => {
    const auth = getAuth();

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    console.log(user);
                });
        } catch (error) {
            console.error("Ошибка регистрации:", error);
        };
    };

    return { handleRegister };
};