import { get, ref, getDatabase } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";

export const getDataUserRealtimeDb = async () => {
    const db = getDatabase();
    const { setDataUserFromDB } = userDataStore;

    try {
        const activeUser = localStorage.getItem("activeUser");
        if (activeUser === null) {
            alert("Данных в хранилище нет. Значение activeUser = undefined");
            return;
        };
        const uidActiveUser = JSON.parse(activeUser).uid;

        const snapshot = await get(ref(db, `/users/${uidActiveUser}`));
        const existingData = snapshot.val() || {};
        const {
            email,
            forename,
            numVisits,
            photo,
            surname,
            uid,
            isAuthorized
        } = existingData;

        const userData = {
            email: email,
            forename: forename,
            numVisits: numVisits,
            photo: photo,
            surname: surname,
            uid: uid,
            isAuthorized: isAuthorized,
        };

        await setDataUserFromDB(userData);
    } catch (error) {
        console.error(error);
    };
};