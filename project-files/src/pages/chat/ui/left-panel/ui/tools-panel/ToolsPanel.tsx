import { observer } from "mobx-react";
import { SettingsMenu } from "../settings-menu";
import { menuSettingsStore } from "../../../../store/menuSettingsStore";
import "./ToolsPanel.css";



export const ToolsPanel = observer(() => {
    const openMenuSettings = menuSettingsStore.openMenuSettings;

    return (
        <div className="tools-panel">

            <button
                className="btn-settings"
                onClick={openMenuSettings}
            />

            <div className="search">
                <div className="search-inner">
                    <input
                        className="search-inner__input"
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
            </div>
            <SettingsMenu />
        </div>
    );
});