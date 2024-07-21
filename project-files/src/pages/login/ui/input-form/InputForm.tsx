interface IInput {
    type: string;
    placeholder: string;
}
import "./InputForm.css";

export function InputForm(props: IInput) {
    const { type, placeholder } = props;

    return (
        <input
            type={type}
            className="input-auth"
            placeholder={placeholder}
        />
    );
};