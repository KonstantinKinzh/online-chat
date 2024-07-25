import { useState } from "react";


export const useGetDataUserInput = () => {
    const [file, setFile] = useState<File | null>(null);
    const [forename, setForename] = useState("");
    const [surname, setSurname] = useState("");

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
    };

    return {
        forename,
        surname,
        file,
        getForenameUser,
        getSurnameUser,
        getFileFromInput
    };
};