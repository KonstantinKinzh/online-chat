import { userDataStore } from "@/store/userDataStore";
import { getDataUserRealtimeDb } from "@/firebase/getDataUserRealtimeDb";
import { getDatabase, ref, set, get } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getDatabase();
const storage = getStorage();

export const updateDataUser = async (forename: string, surname: string, file: File | null) => {
    const { uidStore } = userDataStore;
    const snapshot = await get(ref(db, `/users/${uidStore}`));
    const existingData = snapshot.val() || {};

    try {

        let photoUrl = null;

        if (file !== null) {
            const storageReference = storageRef(storage, 'images/' + file.name);
            await uploadBytes(storageReference, file);
            photoUrl = await getDownloadURL(storageReference);
        };

        let dataDB = null;
        for (let key in existingData) {
            console.log(existingData);
            dataDB = existingData[key];
        };

        const userRef = ref(db, "users/" + dataDB.uid);

        if (file !== null) {
            const { email, numVisits, uid } = dataDB;
            await set(userRef, {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photoUrl,
                surname: surname,
                uid: uid,
            });
        } else {
            const { email, numVisits, photo, uid } = dataDB;
            await set(userRef, {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photo,
                surname: surname,
                uid: uid,
            });
        };
    } catch (error) {
        console.error(error);
    } finally {
        getDataUserRealtimeDb();
    };
};