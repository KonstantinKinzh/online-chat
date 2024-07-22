import IconGr1 from "@/resources/images/icon-gr1.png";
import "./Groups.css";

export function Groups() {
    return (
        <div className="groups">
            <div className="groups-inner">
                <img
                    className="group-icon"
                    src={IconGr1}
                    alt="Icon group"
                />
                <div className="group-data">
                    <p className="group-name">Frontend Developers</p>
                    <p className="last-message">Привет</p>
                </div>
            </div>
        </div>
    );
};