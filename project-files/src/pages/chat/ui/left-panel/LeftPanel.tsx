import { ToolsPanel } from "./ui/tools-panel";
import { Groups } from "./ui/groups"
import "./LeftPanel.css";

export function LeftPanel() {
  return (
    <div className="left-panel">
      <ToolsPanel />
      <Groups />
    </div>
  );
};