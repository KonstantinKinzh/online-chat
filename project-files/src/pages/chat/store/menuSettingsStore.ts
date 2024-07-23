import { makeAutoObservable } from "mobx";

class MenuSettingsStore {

    isOpenMenuSettings = false;
    isAtiveWinCreateGroup = false;
    isActiveWinDataUser = false;


    constructor() {
        makeAutoObservable(this);
    };

    // Открыть меню настроек
    openMenuSettings = () => {
        this.isOpenMenuSettings = !this.isOpenMenuSettings;
    };

    // Открыть меню настроект данных пользователя
    openMenuDataUser = () => {
        this.isActiveWinDataUser = !this.isActiveWinDataUser;
        this.isOpenMenuSettings = false;
    };


};

const menuSettingsStore = new MenuSettingsStore();
export { menuSettingsStore };