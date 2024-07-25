import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { updateDataUser } from "@/firebase/updateDataUser";
import { useClickEsc } from "../../hooks/useClickEsc";
import { PhotoUser } from "./ui/photoUser";
import { userDataStore } from "@/store/userDataStore";
import { useGetDataUserInput } from "../../hooks/useGetDataUserInput";
import { useDeterminLoadFile } from "../../hooks/useDeterminLoadFile";
import { useHideWinDataUser } from "../../hooks/useHideWinDataUser";
import { winDataUserStore } from "@/store/winDataUserStore";
import "./WinDataUser.css";

export const WinDataUser = observer(() => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const { clickEsc } = useClickEsc();
    const { photoStore } = userDataStore;
    const { toggleWinDataUser } = winDataUserStore;
    const {
        forename, surname, file, fileSrc, getFileFromInput,
        getForenameUser, getSurnameUser
    } = useGetDataUserInput();
    const { isLoadFile, determinLoadFile } = useDeterminLoadFile(file);
    const { hideWinDataUser } = useHideWinDataUser(wrapperRef, toggleWinDataUser);

    // Закрытие по нажатию Esc
    useEffect(() => {
        window.addEventListener("keydown", clickEsc);
        return () => {
            window.removeEventListener("keydown", clickEsc);
        };
    }, []);

    // Закрытие по нажатию на внешней области модального окна
    useEffect(
        () => {
            document.addEventListener("mousedown", hideWinDataUser);
            document.addEventListener("touchstart", hideWinDataUser);
            return () => {
                document.removeEventListener("mousedown", hideWinDataUser);
                document.removeEventListener("touchstart", hideWinDataUser);
            };
        }, [wrapperRef, hideWinDataUser]);


    return (
        <div
            ref={wrapperRef}
            className="win-data-user-wrapper"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="win-data-user"
            >
                <form
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateDataUser(forename, surname, file);
                            toggleWinDataUser();
                        };
                    }}
                    className="win-data-user-inner"
                >
                    <h2 className="title-form">Введите данные</h2>

                    <PhotoUser
                        forename={forename}
                        surname={surname}
                        file={file}
                        photoStore={photoStore}
                        isLoadFile={isLoadFile}
                        fileSrc={fileSrc}
                        getFileFromInput={getFileFromInput}
                        determinLoadFile={determinLoadFile}
                    />

                    <input
                        onChange={getForenameUser}
                        className="input-data"
                        type="text"
                        value={forename}
                        placeholder="Имя"
                    />

                    <input
                        onChange={getSurnameUser}
                        className="input-data"
                        type="text"
                        value={surname}
                        placeholder="Фамилия"
                    />
                    <button
                        onClick={() => {
                            updateDataUser(forename, surname, file);
                            toggleWinDataUser();
                        }}
                        className="btn-save-data"
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
});