import { useNavigate } from "react-router";
import "./Exit.css";

interface IAddGroupProps {
    onHandleClick: React.MouseEventHandler<HTMLDivElement>
};

export function Exit(props: IAddGroupProps) {
    const { onHandleClick } = props;
    const navigate = useNavigate();

    return (
        <div
            onClick={(e) => {
                onHandleClick(e),
                    navigate("/")
            }}
            className="exit"
        >
            <div className="exit-inner">
                <p className="name-exit">Выход</p>
            </div>
        </div>
    );
};