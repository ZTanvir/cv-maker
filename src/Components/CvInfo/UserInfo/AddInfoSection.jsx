import AddInfoButton from "./AddInfoButton";
import CustomForm from "./CustomForm";

const AddInfoSection = (props) => {
    const {
        addInfoBtnText,
        handleAddInfoBtn,
        formInputData,
        formValues,
        updateFormValue,
        handleSubmitForm,
        handleDeleteBtn,
        handleCancelBtn,
    } = props;
    return (
        <section>
            <AddInfoButton
                btnIcon="Add"
                buttonName={addInfoBtnText}
                handleButton={handleAddInfoBtn}
            />
            <CustomForm
                formInputData={formInputData}
                formValues={formValues}
                updateFormValue={updateFormValue}
                handleSubmitForm={handleSubmitForm}
                handleDeleteBtn={handleDeleteBtn}
                handleCancelBtn={handleCancelBtn}
            />
        </section>
    );
};
export default AddInfoSection;
