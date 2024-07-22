import { Fragment } from "react";
import { observer } from "mobx-react";
import { menuSettingsStore } from "@/store/menuSettingsStore";
import { AddGroup } from "../settings/add-group";
import "./SettingsMenu.css";

export const SettingsMenu = observer(() => {
    const isOpenMenuSettings = menuSettingsStore.isOpenMenuSettings;
    const toggleMenuSettings = menuSettingsStore.toogleMenuSettings;

    return (
        <Fragment>
            {isOpenMenuSettings &&
                <div onClick={toggleMenuSettings} className="settings-menu-wrapper">
                    <div onClick={(e) => e.stopPropagation()} className="settings-menu">
                        <div className="setting-menu-inner">

                            <AddGroup
                                onHandleClick={toggleMenuSettings}
                            />

                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
});