import { db } from "@/firebase/firebase";
import { auth } from "@/firebase/firebase";
import { ref, get, update } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userDataStore } from "@/store/userDataStore";
import { winDataUserStore } from "@/store/winDataUserStore";
import { getDataUserRealtimeDb } from "./getDataUserRealtimeDb";

interface IArgLogin {
    email?: string,
    password?: string
};

export const login = async ({ email, password }: IArgLogin) => {
    let userData = null;
    try {
        if (email === undefined || password === undefined) {
            return;
        };
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        userData = user;
        console.log(user.uid);
    } catch (error) {
        console.error(error);
    } finally {
        getNumVisitsUser(userData?.uid);
    };
};

const getNumVisitsUser = async (uidClient: string | undefined) => {
    const { setNumVisitsUser } = userDataStore;
    const { toggleWinDataUser } = winDataUserStore;
    try {
        const snapshot = await get(ref(db, `/users/${uidClient}`));
        const existingData = snapshot.val() || {};
        let { email, forename, isAuthorized, numVisits, photo, surname, uid } = existingData;
        numVisits += 1;

        setNumVisitsUser(numVisits);
        if (numVisits === 1) {
            toggleWinDataUser();
        };

        if (uid === undefined) {
            alert("При Авторизации полученный UID равен 'undefined' ")
            return;
        };

        localStorage.setItem("activeUser", JSON.stringify({
            email: email,
            forename: forename,
            isAuthorized: isAuthorized,
            numVisits: numVisits,
            photo: photo,
            surname: surname,
            uid: uid
        }));

        if (numVisits > 1) {
            const userData = {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photo,
                surname: surname,
                uid: uid,
                isAuthorized: true,
            };
            const updates: { [key: string]: typeof userData } = {};
            updates['/users/' + uid] = userData;
            return update(ref(db), updates);
        };
    } catch (error) {
        console.error(error);
    } finally {
        getDataUserRealtimeDb();
    };
};