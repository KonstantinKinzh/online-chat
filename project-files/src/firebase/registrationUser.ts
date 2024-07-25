import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";
import { winDataUserStore } from "@/store/winDataUserStore";
import "./firebase";

const auth = getAuth();
const db = getDatabase();

export const handleRegister = async (email: string, password: string) => {
    let userData = null;
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        userData = user;
        console.log(user);
    } catch (error) {
        console.error("Ошибка регистрации:", error);
    } finally {
        writeUserData(userData, email);
    };
};

const writeUserData = async (userData: any, email: string) => {
    const { setNumVisitsUser } = userDataStore;
    const { toggleWinDataUser } = winDataUserStore;
    const userRef = ref(db, "users/" + userData.uid);

    await set(userRef, {
        uid: userData.uid,
        numVisits: 1,
        forename: "",
        surname: "",
        email: email,
        photo: ""
    });

    toggleWinDataUser();
    setNumVisitsUser(1);
};

