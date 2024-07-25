import { db } from "@/firebase/firebase";
import { auth } from "@/firebase/firebase";
import { ref, get, update } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userDataStore } from "@/store/userDataStore";
import { winDataUserStore } from "@/store/winDataUserStore";

interface IArgLogin {
    email?: string,
    password?: string
};

export const login = async ({ email, password }: IArgLogin) => {
    const { setUID } = userDataStore;
    let userData = null;
    try {
        if (email === undefined || password === undefined) {
            return;
        };
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        userData = user;
    } catch (error) {
        console.error(error);
    } finally {
        setUID(userData?.uid);
        getNumVisitsUser(userData?.uid);
    };
};

const getNumVisitsUser = async (uid: string | undefined) => {
    const { setNumVisitsUser } = userDataStore;
    const { toggleWinDataUser } = winDataUserStore;
    try {
        const snapshot = await get(ref(db, `/users/${uid}`));
        const existingData = snapshot.val() || {};
        let { email, forename, numVisits, photo, surname, } = existingData;
        numVisits += 1;
        console.log(numVisits);
        setNumVisitsUser(numVisits);
        if (numVisits === 1) {
            toggleWinDataUser();
        };
        if (numVisits > 1) {
            const userData = {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photo,
                surname: surname,
                uid: uid,
            };
            const updates: { [key: string]: typeof userData } = {};
            updates['/users/' + uid] = userData;
            return update(ref(db), updates);
        };
    } catch (error) {
        console.error(error);
    }
};