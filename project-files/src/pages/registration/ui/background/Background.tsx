import { Fragment } from "react/jsx-runtime";
import "./Background.css";

export function Background() {
    return (
        <Fragment>
            <div className="underlay-photo" />
            <div className="underlay-black" />
        </Fragment>
    );
};