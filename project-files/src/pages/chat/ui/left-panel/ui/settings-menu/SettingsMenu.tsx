import { Fragment } from "react";
import { observer } from "mobx-react";
import { menuSettingsStore } from "../../../../store/menuSettingsStore";
import { winDataUserStore } from "@/pages/chat/store/winDataUserStore";
import { AddGroup } from "../settings/add-group";
import { SettingsUser } from "../settings/settings-user";
import "./SettingsMenu.css";

export const SettingsMenu = observer(() => {

    const isOpenMenuSettings = menuSettingsStore.isOpenMenuSettings;
    const openMenuDataUser = menuSettingsStore.openMenuDataUser;


    return (
        <Fragment>
            {isOpenMenuSettings &&
                <div className="settings-menu-wrapper">
                    <div onClick={(e) => e.stopPropagation()} className="settings-menu">
                        <div className="setting-menu-inner">

                            <AddGroup
                            // onHandleClick={toggleMenuSettings}
                            />

                            <SettingsUser
                                onHandleClick={openMenuDataUser}
                            />

                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
});