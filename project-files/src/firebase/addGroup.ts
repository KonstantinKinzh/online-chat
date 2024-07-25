import { set, ref, get, update, push } from "firebase/database";
import { db } from "./firebase";
import { userDataStore } from "@/store/userDataStore";

const { uidStore } = userDataStore;


export const addGroup = async (nameGroup: string, imgSrc: string | undefined) => {
    const userRef = ref(db, "users/" + uidStore);

    const snapshot = await get(ref(db, `/users/${uidStore}`));
    const existingData = snapshot.val() || {};

    console.log(nameGroup);
    console.log(imgSrc);

    const group = {
        nameGroup: nameGroup,
        imgSrc: imgSrc,
    };

    const updatedGroups = existingData.groups ? [...existingData.groups, group] : [group];

    await update(userRef, {
        groups: updatedGroups
    });

    updateDataUser(nameGroup, imgSrc);
};

export const updateDataUser = async (nameGroup: string, imgSrc: string | undefined) => {
    const groupRef = ref(db, `/groups/${uidStore}`);

    const groupData = {
        nameGroup: nameGroup,
        imgSrc: imgSrc,
    };

    const newGroupRef = push(groupRef);
    await set(newGroupRef, groupData);
    return newGroupRef.key;
};