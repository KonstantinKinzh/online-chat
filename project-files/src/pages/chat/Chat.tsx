import { observer } from "mobx-react";
import { Header } from "./ui/header";
import { LeftPanel } from "./ui/left-panel";
import { WindowChat } from "./ui/window-chat";
import { MessageInput } from "./ui/message-input";
import { WinDataUser } from "./ui/win-data-user";
import { menuSettingsStore } from "./store/menuSettingsStore";
import "./Chat.css";


export const Chat = observer(() => {
    const isActiveWinDataUser = menuSettingsStore.isActiveWinDataUser;
    return (
        <div className="chat">
            <Header />
            <LeftPanel />
            <WindowChat />
            <MessageInput />

            {isActiveWinDataUser && <WinDataUser />}
        </div>
    );
});