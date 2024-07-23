import { observer } from "mobx-react";
import { menuSettingsStore } from "../../store/menuSettingsStore";
import "./WinDataUser.css";

export const WinDataUser = observer(() => {
    const openMenuDataUser = menuSettingsStore.openMenuDataUser;
    return (
        <div onClick={openMenuDataUser} className="win-data-user-wrapper">
            <div onClick={(e) => e.stopPropagation()} className="win-data-user">
                <div className="win-data-user-inner">

                    <h2 className="title-form">Введите данные</h2>

                    <input id="inpTF" type="file" style={{ display: "none" }} />
                    <label htmlFor="inpTF" className="btn-load-file" />

                    <input className="input-data" type="text" placeholder="Имя" />
                    <input className="input-data" type="text" placeholder="Фамилия" />

                </div>
            </div>
        </div>
    );
});