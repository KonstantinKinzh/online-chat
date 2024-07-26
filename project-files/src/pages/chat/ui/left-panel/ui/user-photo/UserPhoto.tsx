import { observer } from "mobx-react";
import { Fragment } from "react/jsx-runtime";
import { userDataStore } from "@/store/userDataStore";
import IntitialImg from "@/resources/icons/win-data-user/photo2.png";
import "./UserPhoto.css";

export const UserPhoto = observer(() => {
    const {photoStore, forenameStore } = userDataStore;
    return (
        <Fragment>
            <div className="user-photo-wrapper">
                <img
                    src={photoStore  ? photoStore : IntitialImg}
                    className="user-photo"
                    alt="User image"
                />

                <p className="user-photo__name">{forenameStore}</p>
            </div>
        </Fragment>
    );
});