import { get, ref, getDatabase } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDataUserRealtimeDb } from "@/firebase/getDataUserRealtimeDb";

export const getAuthData = async () => {
    const auth = getAuth();
    const db = getDatabase();
    let uid = "";
    onAuthStateChanged(auth, (user) => {
        if (user === null) {
            alert("Значение user не получено!");
            return;
        };
        uid = user.uid;
    });
    const snapshot = await get(ref(db, `/users/${uid}`));
    const existingData = snapshot.val() || {};
    const isAuthorized = existingData[uid].isAuthorized;

    // Созраним данные в localStorage
    const activeUser = localStorage.getItem("activeUser");
    if (activeUser === null) {
        alert("Данных в хранилище нет. Значение activeUser = undefined");
        return;
    };
    const uidActiveUser = JSON.parse(activeUser).uid;


    if (!uidActiveUser) {
        localStorage.setItem("activeUser", uid);
    };

    if (isAuthorized || uidActiveUser) {
        getDataUserRealtimeDb();
    };
};