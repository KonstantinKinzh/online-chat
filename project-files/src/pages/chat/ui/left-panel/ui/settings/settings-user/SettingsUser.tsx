import { observer } from "mobx-react";

interface ISettingsUserProps {
    onHandleClick?: React.MouseEventHandler<HTMLDivElement>
};

import "./SettingsUser.css";

export const SettingsUser = observer((props: ISettingsUserProps) => {
    const { onHandleClick } = props;

    return (
        <div id="settingsUserId" onClick={onHandleClick} className="settings-user">
            <div className="settings-user-inner">
                <p className="name-sattings-user">Изменить данные</p>
            </div>
        </div>
    );
});