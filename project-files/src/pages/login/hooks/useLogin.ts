import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = (email: string, password: string) => {
    const login = async () => {

        await signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
            })
    };

    return { login };
};