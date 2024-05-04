// Generate form based on input data and default input data
import InputField from "../../InputField";

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
        <form onSubmit={handleSubmitForm}>
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
            <button onClick={handleDeleteBtn} type="button">
                <span className="material-symbols-outlined">delete</span>
                <span>Delete</span>
            </button>
            <button onClick={handleCancelBtn} type="button">
                Cancel
            </button>
            <button type="submit">Save</button>
        </form>
    );
};
export default CustomForm;
