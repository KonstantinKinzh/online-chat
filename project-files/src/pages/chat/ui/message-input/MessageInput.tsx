import { InputField } from "./ui/input-field";
import { SendBtn } from "./ui/send-btn";
import "./MessageInput.css";

export function MessageInput() {
  return (
    <div className="message-input">
      <div className="message-input-inner">
        <InputField />
        <SendBtn/>
      </div>
    </div>
  );
};