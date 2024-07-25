import { useState } from "react";

export const useCreateGroupInputs = (img: React.RefObject<HTMLInputElement>) => {
    const [imgSrc, setImgSrc] = useState("");
    const [nameGroup, setNameGroup] = useState("");

    const getNameGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameGroup = e.target.value;
        setNameGroup(nameGroup);
        // console.log(nameGroup);
    };

    const getImgGroup = (): string | undefined => {
        if (!img.current || !img.current.files || !img.current.files[0]) {
            alert("Фотография не установлена");
            return;
        };

        const file = img.current.files[0];
        const imgSrc = window.URL.createObjectURL(file);
        setImgSrc(imgSrc);
    };

    return { nameGroup, imgSrc, getNameGroup, getImgGroup }

};