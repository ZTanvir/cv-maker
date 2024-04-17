// This is a reuseable component which will generate item list
// based on listData
// When click on an item it will generate a form with default value
// We can edit the form and submit to update the information

import CustomForm from "./CustomForm";

const ItemList = ({ formData, userData, updateUserData }) => {
    // Get listData from userData
    const listData = userData;
    console.log(userData);
    //
    const defaultFormData = {};
    // Update userdata with new value
    const handleSubmitForm = (event) => {};
    // Delete userdata
    const handleDeleteBtn = () => {};
    // Hide form
    const handleCancelBtn = () => {};
    return (
        <section>
            <div className="listItem">
                {listData.length > 0
                    ? listData.map((item) => (
                          <div key={item.id}>
                              <span>{item.school}</span>
                              <span>{"show/hide"}</span>
                          </div>
                      ))
                    : null}
            </div>
            <CustomForm
                formInputData={formData}
                defaultInputValue={defaultFormData}
                handleSubmitForm={handleSubmitForm}
                handleDeleteBtn={handleDeleteBtn}
                handleCancelBtn={handleCancelBtn}
            />
        </section>
    );
};
export default ItemList;
