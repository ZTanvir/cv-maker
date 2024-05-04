import { useId } from "react";

const InputField = (props) => {
    const inputId = useId();
    const {
        label,
        value,
        onChange,
        rows,
        cols,
        type,
        placeholder,
        name,
        required,
    } = props;
    const uniqueId = `${name}${inputId}`;
    return (
        <div>
            <label htmlFor={uniqueId}>
                {label}:{required ? "*" : " (optional)"}
            </label>
            {type === "textarea" ? (
                <textarea
                    id={uniqueId}
                    name={name}
                    rows={rows}
                    cols={cols}
                    required={true}
                    value={value}
                    onChange={onChange}
                ></textarea>
            ) : (
                <input
                    id={uniqueId}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
};
export default InputField;
