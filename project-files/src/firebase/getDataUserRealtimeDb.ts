import { db } from "./firebase";
import { get, ref } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";


export const getDataUserRealtimeDb = async () => {
    const { uidStore, setDataUserFromDB } = userDataStore;
    const snapshot = await get(ref(db, `/users/${uidStore}`));
    const existingData = snapshot.val() || {};

    

    let dataDB = null;
    for (let key in existingData) {
        console.log(existingData);
        dataDB = existingData[key];
    };

    const { email, forename, numVisits, photo, surname } = dataDB;
    console.log(dataDB);


    const userData = {
        email: email,
        forename: forename,
        numVisits: numVisits,
        photo: photo,
        surname: surname,
        uid: uidStore,
    };

    setDataUserFromDB(userData);
};