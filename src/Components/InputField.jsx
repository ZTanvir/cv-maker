import { useId } from "react";

const InputField = (props) => {
    const inputId = useId();
    const { label, type, placeholder, name, isRequired } = props;
    const uniqueId = `${type}${inputId}`;
    return (
        <div>
            <label htmlFor={uniqueId}>{label}</label>
            <input
                id={uniqueId}
                type={type}
                placeholder={placeholder}
                name={name}
                required={isRequired}
            />
        </div>
    );
};
export default InputField;
