import { getDatabase, ref, get, update } from "firebase/database";
import { userDataStore } from "@/store/userDataStore";

const db = getDatabase();
const { uid, setForenameSurnameUser } = userDataStore;

export const updateDataUser = async (forename: string, surname: string, photoUser: string | undefined) => {
    const snapshot = await get(ref(db, `/users/${uid}`));
    const existingData = snapshot.val() || {};

    setForenameSurnameUser(forename, surname);

    if (forename === "" || surname === "" || photoUser === "") {
        console.log(forename, surname, photoUser);
        alert("Все поля формы должны быть заполнены!");
        return;
    };

    const userData = {
        ...existingData,
        forename: forename,
        surname: surname,
        photo: photoUser,
    };

    const updates: { [key: string]: typeof userData } = {};
    updates['/users/' + uid] = userData;

    return update(ref(db), updates);
};