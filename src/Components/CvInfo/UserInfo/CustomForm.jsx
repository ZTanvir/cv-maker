// Generate form based on input data and default input data
import InputField from "../../InputField";

const CustomForm = (props) => {
    const {
        formInputData,
        defaultInputValue,
        handleSubmitForm,
        handleDeleteBtn,
        handleCancelBtn,
        handleSubmitBtn,
    } = props;
    return (
        <form onSubmit={handleSubmitForm}>
            {formInputData.map((input) => (
                <InputField
                    key={input.id}
                    label={input.label}
                    required={input.require}
                    defaultValue={defaultInputValue[input.name]}
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
            <button onClick={handleSubmitBtn} type="submit">
                Submit
            </button>
        </form>
    );
};
export default CustomForm;
