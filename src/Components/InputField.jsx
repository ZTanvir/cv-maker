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
        options,
        type,
        placeholder,
        name,
        required,
    } = props;
    const uniqueId = `${name}${inputId}`;
    const renderFormField = (formType) => {
        if (formType === "textarea") {
            return (
                <textarea
                    id={uniqueId}
                    name={name}
                    rows={rows}
                    cols={cols}
                    required={true}
                    value={value}
                    onChange={onChange}
                ></textarea>
            );
        } else if (type === "select") {
            return (
                <select
                    id={uniqueId}
                    value={value}
                    name={name}
                    onChange={onChange}
                >
                    {options.length > 0
                        ? options.map((item) => (
                              <option key={item.value} value={item.value}>
                                  {item.label}
                              </option>
                          ))
                        : null}
                </select>
            );
        } else {
            return (
                <input
                    id={uniqueId}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                />
            );
        }
    };

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
            {renderFormField(type)}
        </div>
    );
};
export default InputField;
