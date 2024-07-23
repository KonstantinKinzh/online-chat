import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import "./firebase";

const auth = getAuth();
const db = getDatabase();

export const handleRegister = async (email: string, password: string) => {
    let userData = null;

    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        userData = user;
    } catch (error) {
        console.error("Ошибка регистрации:", error);
    } finally {
        writeUserData(userData, email);

        if(userData === null) {
            return;
        };
    };
};

const writeUserData = async (userData:any, email: string) => {
    const userRef = ref(db, "users/" + userData.uid);

    await set(userRef, {
        uid: userData.uid,
        forename: "",
        surname: "",
        email: email,
        photo: ""
    });
};

