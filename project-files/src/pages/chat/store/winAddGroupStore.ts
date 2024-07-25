import { makeAutoObservable } from "mobx";

class WinAddGroupStore {

    imgGroup: string | undefined = ""
    isOpenWinAddGroup = false;

    constructor() {
        makeAutoObservable(this);
    };

    toggleWinAddGroup = () => {
        this.isOpenWinAddGroup = !this.isOpenWinAddGroup;
    };
};

const winAddGroupStore = new WinAddGroupStore();
export { winAddGroupStore };