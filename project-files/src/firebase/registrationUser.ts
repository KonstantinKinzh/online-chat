import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import "./firebase";

const auth = getAuth();
const db = getDatabase();

export const handleRegister = async (email: string, password: string) => {
    let user = null;
    try {
        user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Ошибка регистрации:", error);
    } finally {
        writeUserData(user, email);
    };
};

const writeUserData = async (user: any, email: string) => {
    const userRef = ref(db, "users/" + user.user.uid);

    await set(userRef, {
        uid: user.user.uid,
        forename: "",
        surname: "",
        email: email,
        photo: ""
    });
};
