// Generate form based on input data and default input data
import InputField from "../../InputField";
import styles from "../../../styles/customForm.module.css";

const CustomForm = (props) => {
    const {
        formInputData,
        formValues,
        updateFormValue,
        handleSubmitForm,
        handleDeleteBtn,
        handleCancelBtn,
    } = props;
    return (
        <form className={styles.customForm} onSubmit={handleSubmitForm}>
            {formInputData.map((input) => (
                <InputField
                    key={input.id}
                    label={input.label}
                    required={input.require}
                    value={formValues[input.name]}
                    onChange={updateFormValue}
                    type={input.type}
                    {...input}
                />
            ))}
            <button
                className={styles.deleteBtn}
                onClick={handleDeleteBtn}
                type="button"
            >
                <span className="material-symbols-outlined">delete</span>
                <span>Delete</span>
            </button>
            <div>
                <button
                    className={styles.cancelBtn}
                    onClick={handleCancelBtn}
                    type="button"
                >
                    Cancel
                </button>
                <button className={styles.submitBtn} type="submit">
                    Save
                </button>
            </div>
        </form>
    );
};
export default CustomForm;
