import { db } from "./firebase";
import { ref, set, get } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";
import { getDataUserRealtimeDb } from "@/firebase/getDataUserRealtimeDb";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

export const updateDataUser = async (forename: string, surname: string, file: File | null) => {
    const storage = getStorage();
    const { setPhotAndNameUser } = userDataStore;

    const activeUserLS = localStorage.getItem("activeUser");
    if (activeUserLS === null) {
        alert("Данных в хранилище нет. Значение activeUser = undefined");
        return;
    };
    const activeUser = JSON.parse(activeUserLS);
    const uidActiveUser = activeUser.uid;

    try {
        const snapshot = await get(ref(db, `/users/${uidActiveUser}`));
        const existingData = snapshot.val() || {};

        console.log(existingData);

        let photoUrl = null;

        if (file !== null) {
            const storageReference = storageRef(storage, 'images/' + file.name);
            await uploadBytes(storageReference, file);
            photoUrl = await getDownloadURL(storageReference);
        };

        const userRef = ref(db, "users/" + uidActiveUser);

        if (file !== null) {
            const { email, numVisits, uid, isAuthorized } = existingData;
            await set(userRef, {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photoUrl,
                surname: surname,
                uid: uid,
                isAuthorized: isAuthorized,
            });

            localStorage.setItem("activeUser", JSON.stringify({
                email: email,
                forename: forename,
                isAuthorized: isAuthorized,
                numVisits: numVisits,
                photo: photoUrl,
                surname: surname,
                uid: uid,
            }));

        } else {
            const { email, numVisits, photo, uid, isAuthorized } = existingData;
            setPhotAndNameUser(photo, forename);
            
            localStorage.setItem("activeUser", JSON.stringify({
                email: email,
                forename: forename,
                isAuthorized: isAuthorized,
                numVisits: numVisits,
                photo: photo,
                surname: surname,
                uid: uid,
            }));

            

            await set(userRef, {
                email: email,
                forename: forename,
                numVisits: numVisits,
                photo: photo,
                surname: surname,
                uid: uid,
                isAuthorized: isAuthorized,
            });
            
        };
    } catch (error) {
        console.error(error);
    } finally {
        getDataUserRealtimeDb();
    };
};