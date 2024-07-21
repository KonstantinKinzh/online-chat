interface IInputFrom {
    type: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value:string;
};

import "./InputForm.css";

export function InputForm(props: IInputFrom) {
    const { type, placeholder, onChange, value } = props;

    return (
        <input
            type={type}
            className="input-auth"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};