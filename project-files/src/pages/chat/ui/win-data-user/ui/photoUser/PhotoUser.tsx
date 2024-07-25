import { startImg } from "@/pages/chat/consts/urlImages";
import { updateDataUser } from "@/firebase/updateDataUser";
import "./PhotoUser.css";

interface IProps {
    forename: string;
    surname: string;
    file: File | null;
    photoStore: string | undefined;
    isLoadFile: boolean;
    fileSrc: string;
    getFileFromInput: React.ChangeEventHandler<HTMLInputElement>;
    determinLoadFile: React.ChangeEventHandler<HTMLInputElement>;
}

export function PhotoUser(props: IProps) {
    const {
        forename,
        surname,
        file,
        photoStore,
        isLoadFile,
        fileSrc,
        getFileFromInput,
        determinLoadFile
    } = props;

    return (
        <div className="btn-load-file-wrapp">
            {(photoStore === "" && isLoadFile === false)
                &&
                <img
                    src={startImg}
                    className="start-img"
                    alt="Начальное фото"
                />
            }
            {(photoStore !== "" && isLoadFile === false)
                &&
                <img
                    src={photoStore}
                    className="just-uploaded-img"
                    alt="Только загруженно фото"
                />
            }
            {isLoadFile
                &&
                <img
                    src={fileSrc}
                    className="just-uploaded-img"
                    alt="Только загруженно фото"
                />
            }
            <input
                id="inpTF"
                type="file"
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        updateDataUser(forename, surname, file);
                    }
                }}
                onChange={(e) => { getFileFromInput(e), determinLoadFile(e) }}
                className="input-type-file"
            />
        </div>
    );
};