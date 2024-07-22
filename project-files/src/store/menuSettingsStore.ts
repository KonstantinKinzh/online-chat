import { makeAutoObservable } from "mobx";

class MenuSettingsStore {

    isOpenMenuSettings = false;

    constructor() {
        makeAutoObservable(this);
    };

    toogleMenuSettings = () => {
        this.isOpenMenuSettings = !this.isOpenMenuSettings;
    };
};

const menuSettingsStore = new MenuSettingsStore();

export { menuSettingsStore };