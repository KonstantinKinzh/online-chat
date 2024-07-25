import { observer } from "mobx-react";
import { Header } from "./ui/header";
import { LeftPanel } from "./ui/left-panel";
import { WindowChat } from "./ui/window-chat";
import { MessageInput } from "./ui/message-input";
import { WinDataUser } from "./ui/win-data-user";
import { WinAddGroup } from "./ui/win-add-group";
import { userDataStore } from "@/store/userDataStore";
import { winDataUserStore } from "@/store/winDataUserStore";
import { winAddGroupStore } from "./store/winAddGroupStore";

import "./Chat.css";



export const Chat = observer(() => {
    const { numVisitsUser } = userDataStore;
    const { isOpenWinDataUser } = winDataUserStore;
    const { isOpenWinAddGroup } = winAddGroupStore;

    return (
        <div className="chat">
            <Header />
            <LeftPanel />
            <WindowChat />
            <MessageInput />

            {isOpenWinAddGroup && <WinAddGroup />}
            {isOpenWinDataUser && <WinDataUser />}
            {numVisitsUser === 1 && isOpenWinDataUser && <WinDataUser />}
        </div>
    );
});