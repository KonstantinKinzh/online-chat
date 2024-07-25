import { useState } from "react";
import { userDataStore } from "@/store/userDataStore";


export const useGetDataUserInput = () => {
    const {forenameStore, surnameStore} = userDataStore;
    const [file, setFile] = useState<File | null>(null);
    const [fileSrc, setFileSrc] = useState("");
    const [forename, setForename] = useState(forenameStore);
    const [surname, setSurname] = useState(surnameStore);


    const getForenameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const forenammeValue = e.target.value;
        setForename(forenammeValue);
    };

    const getSurnameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const surnameValue = e.target.value;
        setSurname(surnameValue);
    };

    const getFileFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
            return;
        };
        const file = e.target.files[0];
        setFile(file);
        setFileSrc(window.URL.createObjectURL(file))
    };

    return {
        forename,
        surname,
        file,
        fileSrc,
        getForenameUser,
        getSurnameUser,
        getFileFromInput
    };
};