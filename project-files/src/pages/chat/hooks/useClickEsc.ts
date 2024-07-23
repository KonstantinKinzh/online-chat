import { winDataUserStore } from "../store/winDataUserStore";
const { toggleWinDataUser } = winDataUserStore;

export const useClickEsc = () => {
    const clickEsc = (e: KeyboardEvent) => {
        if (e.keyCode === 27) toggleWinDataUser();
    };
    return { clickEsc };
};