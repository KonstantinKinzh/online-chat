import { set, get, ref, getDatabase } from "firebase/database";

export const exitChatDeleteDataLS = async () => {
    try {
        const db = getDatabase();

        const activeUser = localStorage.getItem("activeUser");
        if (activeUser === null) {
            alert("Данных в хранилище нет. Значение activeUser = undefined");
            return;
        };
        const uidActiveUser = JSON.parse(activeUser).uid;

        const userRef = ref(db, "users/" + uidActiveUser);
        const snapshot = await get(ref(db, `/users/${uidActiveUser}`));
        const existingData = snapshot.val() || {};
        const {
            email,
            forename,
            numVisits,
            photo,
            surname,
            uid
        } = existingData;

        await set(userRef, {
            email: email,
            forename: forename,
            isAuthorized: false,
            numVisits: numVisits,
            photo: photo,
            surname: surname,
            uid: uid,
        });

        localStorage.removeItem("activeUser");
    } catch (error) {
        console.error(error);
    };
};