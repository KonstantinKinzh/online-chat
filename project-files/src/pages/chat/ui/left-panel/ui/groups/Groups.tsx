import { observer } from "mobx-react";
import { Fragment } from "react/jsx-runtime";
import { userDataStore } from "@/store/userDataStore";
import {v4 as uuid} from "uuid"
import IconGr1 from "@/resources/images/icon-gr1.png";
import "./Groups.css";

export const Groups = observer(() => {

    const { groupsStore } = userDataStore;
    console.log(groupsStore);
    return (
        <Fragment>
            {groupsStore.map((group) => (
                <div key={uuid()} className="groups">
                    <div className="groups-inner">
                        <img
                            className="group-icon"
                            src={group.IconGr1}
                            alt="Icon group"
                        />
                        <div className="group-data">
                            <p className="group-name">{group.nameGroup}</p>
                            <p className="last-message">Привет</p>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
});