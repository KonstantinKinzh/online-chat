import { Fragment } from "react";
import { observer } from "mobx-react";
import { menuSettingsStore } from "../../../../store/menuSettingsStore";
import { winDataUserStore } from "@/store/winDataUserStore";
import { winAddGroupStore } from "@/pages/chat/store/winAddGroupStore";
import { UserPhoto } from "../user-photo";
import { AddGroup } from "../settings/add-group";
import { SettingsUser } from "../settings/settings-user";
import "./SettingsMenu.css";

export const SettingsMenu = observer(() => {
    const { isOpenMenuSettings, closeMenuSettings } = menuSettingsStore;
    const { toggleWinDataUser } = winDataUserStore;
    const { toggleWinAddGroup } = winAddGroupStore;

    return (
        <Fragment>
            {isOpenMenuSettings &&
                <div onClick={closeMenuSettings} className="settings-menu-wrapper">
                    <div onClick={(e) => e.stopPropagation()} className="settings-menu">
                        <div className="setting-menu-inner">

                            <UserPhoto />

                            <AddGroup
                                onHandleClick={toggleWinAddGroup}
                            />

                            <SettingsUser
                                onHandleClick={toggleWinDataUser}
                            />

                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
});