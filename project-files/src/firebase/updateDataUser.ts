import { getDatabase, ref, get, update } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getDatabase();
const storage = getStorage();

export const updateDataUser = async (forename: string, surname: string, file: any) => {
    const { uid } = userDataStore;
    const snapshot = await get(ref(db, `/users/${uid}`));
    const existingData = snapshot.val() || {};

    const storageReference = storageRef(storage, 'images/' + file.name);

    if (file !== null) {
        try {
            await uploadBytes(storageReference, file);
            const photoUrl = await getDownloadURL(storageReference);
            let dataDB = null;
            for (let key in existingData) {
                console.log(existingData[key]);
                dataDB = existingData[key];
            };
            const { email, numVisits, uid } = dataDB;
            const userData = {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photoUrl,
                surname: surname,
                uid: uid,
            };
            const updates: { [key: string]: typeof userData } = {};
            updates['/users/' + uid] = userData;
            return update(ref(db), updates);
        } catch (error) {
            console.error(error);
        };
    };
};




