import { useState } from "react";

export const useDeterminLoadFile = (file:File | null) => {
    const [isLoadFile, setIsLoadFile] = useState(false);

    const determinLoadFile = () => {
        if (!file) {
            setIsLoadFile(false);
        };
        setIsLoadFile(true);
    };
    return {isLoadFile, determinLoadFile};
};