import { useId } from "react";
import styles from "../styles/inputField.module.css";

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
        <div className={styles.inputField}>
            <label htmlFor={uniqueId}>
                {label}:
                {required ? (
                    <span className={styles.isRequired}>*</span>
                ) : (
                    " (optional)"
                )}
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
