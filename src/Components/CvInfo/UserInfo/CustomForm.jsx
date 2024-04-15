// Generate form based on input data
const CustomForm = (props) => {
    const { formInputData, defaultInputValue } = props;
    return (
        <form>
            <button type="button">
                <span class="material-symbols-outlined">delete</span>
                <span>Delete</span>
            </button>
            <button type="button">Cancel</button>
            <button type="submit">Submit</button>
        </form>
    );
};
export default CustomForm;
