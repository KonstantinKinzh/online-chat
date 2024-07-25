import { observer } from "mobx-react";
import { Fragment } from "react/jsx-runtime";
import { WinDataUser } from "../../../win-data-user";
import { userDataStore } from "@/store/userDataStore";
import { winDataUserStore } from "@/store/winDataUserStore";
import IntitialImg from "@/resources/icons/win-data-user/photo2.png";
import "./UserPhoto.css";

export const UserPhoto = observer(() => {
    const { photo } = userDataStore;
    const { isOpenWinDataUser, toggleWinDataUser } = winDataUserStore;
    return (
        <Fragment>
            <div className="user-photo-wrapper">
                <img
                    src={photo === "" ? photo : IntitialImg}
                    className="user-photo"
                    onClick={toggleWinDataUser}
                    alt="User image"
                />
            </div>

            {isOpenWinDataUser && <WinDataUser />}
        </Fragment>
    );
});