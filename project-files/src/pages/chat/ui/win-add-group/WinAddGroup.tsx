import { useRef } from "react";
import { observer } from "mobx-react";
import { addGroup } from "@/firebase/addGroup";
import { urlInitialImg } from "../../consts/urlImages";
import { useCreateGroupInputs } from "../../hooks/useCreateGroupInputs";
import "./WinAddGroup.css";

export const WinAddGroup = observer(() => {
    const imgGroup = useRef(null);
    const { nameGroup,
        imgSrc,
        getNameGroup,
        getImgGroup
    } = useCreateGroupInputs(imgGroup);


    return (
        <div className="win-add-group-wrapper">
            <div onClick={(e) => e.stopPropagation()} className="win-add-group">
                <div className="win-add-group-inner">

                    <h2 className="title-form">Создать группу</h2>

                    <div style={{ backgroundImage: urlInitialImg }} className="btn-load-file-wrapp">
                        <input
                            ref={imgGroup}
                            id="inpTF"
                            type="file"
                            onChange={getImgGroup}
                            style={{ display: "none" }}
                        />
                        <label
                            htmlFor="inpTF"
                            className="btn-load-file"
                        />
                    </div>

                    <input
                        onChange={getNameGroup}
                        className="input-data"
                        type="text"
                        value={nameGroup}
                        placeholder="Название"
                    />

                    <button
                        onClick={() => {
                            addGroup(nameGroup, imgSrc);
                            // toggleWinDataUser()
                        }}
                        className="btn-create-group">
                        Создать
                    </button>

                </div>
            </div>
        </div>
    );
});