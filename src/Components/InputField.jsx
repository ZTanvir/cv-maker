import { useId } from "react";

const InputField = (props) => {
    const inputId = useId();
    const {
        label,
        value,
        onChange,
        type,
        placeholder,
        name,
        required,
        defaultValue,
    } = props;
    const uniqueId = `${name}${inputId}`;
    return (
        <div>
            <label htmlFor={uniqueId}>
                {label}:{required ? "*" : " (optional)"}
            </label>
            <input
                id={uniqueId}
                type={type}
                placeholder={placeholder}
                name={name}
                required={required}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
export default InputField;
