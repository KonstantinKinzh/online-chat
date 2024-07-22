import { Header } from "./ui/header";
import { LeftPanel } from "./ui/left-panel";
import { WindowChat } from "./ui/window-chat";
import { MessageInput } from "./ui/message-input";

import "./Chat.css";

export function Chat() {
    return (
        <div className="chat">
            <Header/>
            <LeftPanel />
            <WindowChat />
            <MessageInput />
        </div>
    );
};