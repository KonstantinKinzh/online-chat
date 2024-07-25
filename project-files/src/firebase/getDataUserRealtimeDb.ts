import { userDataStore } from "@/store/userDataStore";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

const { uid, setDataUserFromDB } = userDataStore;

export const getDataUserRealtimeDb =  () => {
    const userRef = ref(db, 'users/' + uid);

    // Подписываемся на изменения в данных пользователя
    onValue(userRef, async (snapshot) => {
        const userData = await snapshot.val();
        console.log(userData);
        if(userData === null) {
            console.log("На сервере отсутствуют данные!");
            return;
        };

        setDataUserFromDB(userData);
    });
};