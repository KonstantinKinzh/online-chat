import { useState } from "react";
import { userDataStore } from "@/store/userDataStore";

export const useGetDataUserInput = (photoUser: React.RefObject<HTMLInputElement>) => {
    const [forename, setForename] = useState("");
    const [surname, setSurname] = useState("");

    const getPhotoUser = (): string | undefined => {

        if (!photoUser.current || !photoUser.current.files || !photoUser.current.files[0]) {
            alert("Фотография не установлена");
            return;
        };

        const file = photoUser.current.files[0];
        const photoSrc = window.URL.createObjectURL(file);
        userDataStore.setPhotoUser(photoSrc);
    };

    const getForenameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const forenammeValue = e.target.value;
        setForename(forenammeValue);
        console.log(forename);
        console.log(e.target.value);
    };

    const getSurnameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const surnameValue = e.target.value;
        setSurname(surnameValue);
        console.log(surname);
        console.log(e.target.value);
    };

    return { forename, surname, getPhotoUser, getForenameUser, getSurnameUser };
};