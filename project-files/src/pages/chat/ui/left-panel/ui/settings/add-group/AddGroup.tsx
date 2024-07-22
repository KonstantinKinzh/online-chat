interface IAddGroupProps {
    onHandleClick: React.MouseEventHandler<HTMLDivElement>
}

import "./AddGroup.css";

export function AddGroup(props: IAddGroupProps) {
    const { onHandleClick } = props;
    return (
        <div onClick={onHandleClick} className="add-group">
            <div className="add-group-inner">
                <p className="name-sattings">Создать группу</p>
            </div>
        </div>
    );
};