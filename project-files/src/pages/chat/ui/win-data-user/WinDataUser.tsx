import { observer } from "mobx-react";
import { useRef, useEffect } from "react";
import { urlInitialImg } from "../../consts/urlImages";
import { updateDataUser } from "@/firebase/updateDataUser";
import { useClickEsc } from "../../hooks/useClickEsc";
import { userDataStore } from "@/store/userDataStore";
import { useGetDataUserInput } from "../../hooks/useGetDataUserInput";
import { winDataUserStore } from "../../store/winDataUserStore";
import "./WinDataUser.css";

export const WinDataUser = observer(() => {

    const photoUser = useRef(null);
    const { photo } = userDataStore;
    const { clickEsc } = useClickEsc();
    const { toggleWinDataUser } = winDataUserStore;

    const {
        forename,
        surname,
        getPhotoUser,
        getForenameUser,
        getSurnameUser
    } = useGetDataUserInput(photoUser);

    useEffect(() => {
        window.addEventListener("keydown", clickEsc);
        return () => {
            window.removeEventListener("keydown", clickEsc);
        };
    }, []);

    return (
        <div onClick={toggleWinDataUser} className="win-data-user-wrapper">
            <div onClick={(e) => e.stopPropagation()} className="win-data-user">
                <div className="win-data-user-inner">

                    <h2 className="title-form">Введите данные</h2>

                    <div
                        className="btn-load-file-wrapp"
                        style={{ backgroundImage: photo === "" ? urlInitialImg : `url(${photo})` }}>
                        <input
                            ref={photoUser}
                            id="inpTF"
                            type="file"
                            onChange={getPhotoUser}
                            style={{ display: "none" }}
                        />
                        <label
                            htmlFor="inpTF"
                            className="btn-load-file"
                        />
                    </div>

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
                        onClick={() => { updateDataUser(forename, surname, photo); toggleWinDataUser() }}
                        className="btn-save-data">
                        Сохранить
                    </button>

                </div>
            </div>
        </div>
    );
});