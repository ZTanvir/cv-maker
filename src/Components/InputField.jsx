import { useId } from "react";

const InputField = (props) => {
    const inputId = useId();
    const { label, value, onChange, type, placeholder, name, required } = props;
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
            />
        </div>
    );
};
export default InputField;
