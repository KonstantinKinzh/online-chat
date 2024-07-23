import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userDataStore } from "@/store/userDataStore";

const setUID = userDataStore.setUID;

export const login = async (email: string, password: string) => {
    let userData = null;
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        userData = user;
    } catch (error) {
        console.error(error);
    } finally{
        setUID(userData?.uid);
    }; 
};