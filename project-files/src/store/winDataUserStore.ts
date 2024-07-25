import { makeAutoObservable } from "mobx";

class WinDataUserStore {

    isOpenWinDataUser = false;

    constructor() {
        makeAutoObservable(this);
    };

    toggleWinDataUser = () => {
        this.isOpenWinDataUser = !this.isOpenWinDataUser;
    };
};

const winDataUserStore = new WinDataUserStore();

export { winDataUserStore };