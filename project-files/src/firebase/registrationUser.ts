import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";
import { winDataUserStore } from "@/store/winDataUserStore";
import { getDataUserRealtimeDb } from "./getDataUserRealtimeDb";
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

const writeUserData = async (userData: any, emailClient: string) => {
    const { setNumVisitsUser } = userDataStore;
    const { toggleWinDataUser } = winDataUserStore;
    const userRef = ref(db, "users/" + userData.uid);

    await set(userRef, {
        uid: userData.uid,
        numVisits: 1,
        forename: "",
        surname: "",
        email: emailClient,
        photo: "",
        isAuthorized: true,
    });

    localStorage.setItem("activeUser", userData.uid);

    const snapshot = await get(ref(db, `/users/${userData.uid}`));
    const existingData = snapshot.val() || {};
    let { email, forename, isAuthorized, numVisits, photo, surname, uid } = existingData;

    localStorage.setItem("activeUser", JSON.stringify({
        email: email,
        forename: forename,
        isAuthorized: isAuthorized,
        numVisits: numVisits,
        photo: photo,
        surname: surname,
        uid: uid
    }));

    setNumVisitsUser(1);
    getDataUserRealtimeDb();
    toggleWinDataUser();
};

