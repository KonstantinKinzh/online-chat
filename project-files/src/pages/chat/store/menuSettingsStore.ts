import { makeAutoObservable } from "mobx";

class MenuSettingsStore {

    isOpenMenuSettings = false;

    constructor() {
        makeAutoObservable(this);
    };

    // Открыть меню настроек
    openMenuSettings = () => {
        this.isOpenMenuSettings = !this.isOpenMenuSettings;
    };

    // Открыть меню настроект данных пользователя
    closeMenuSettings = () => {
        this.isOpenMenuSettings = false;
    };


};

const menuSettingsStore = new MenuSettingsStore();
export { menuSettingsStore };