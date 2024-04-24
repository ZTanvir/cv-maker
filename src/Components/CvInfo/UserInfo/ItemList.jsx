// This is a reuseable component which will generate item list
// based on listData
// When click on an item it will generate a form with default value
// We can edit the form and submit to update the information

import { useState } from "react";
import CustomForm from "./CustomForm";

const ItemList = ({ formData, formValuesObj, userData, updateUserData }) => {
    const [formValues, setFormValues] = useState(formValuesObj);
    const [showHideSection, setShowHideSection] = useState(false);
    // Get listData from userData
    const listData = userData;
    // Update userdata with new value
    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log("form submitted", {
            ...formValues,
            id: crypto.randomUUID(),
        });
        updateUserData();
        setFormValues({ ...formValuesObj });
    };
    // Delete userdata
    const handleDeleteBtn = () => {};
    // Hide form
    const handleCancelBtn = () => {};
    // view or update institute information
    const handleInstituteInfo = (event) => {
        const instituteId = event.target.getAttribute("data-institute-id");
        // get data of the instituteName
        const instituteData = listData.filter(
            (data) => data.id === instituteId
        )[0];
        setFormValues({ ...instituteData });
        // show edit institute form section
        setShowHideSection(true);
    };
    // Show or hide form based on click on visibility
    const handleVisibility = (event) => {
        console.log(event.target);
        // show or hide insitute infomation from cv
    };
    const updateFormValue = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <section>
            {!showHideSection && (
                <div className="listItem">
                    {/* Generate institute based on list */}
                    {listData.length > 0
                        ? listData.map((item) => (
                              <div key={item.id}>
                                  <span
                                      data-institute-id={item.id}
                                      onClick={handleInstituteInfo}
                                  >
                                      {item.institute}
                                  </span>
                                  <span
                                      onClick={handleVisibility}
                                      className="material-symbols-outlined"
                                  >
                                      visibility
                                      {/* "visibility_off" */}
                                  </span>
                              </div>
                          ))
                        : null}
                </div>
            )}
            {showHideSection && (
                <div>
                    <CustomForm
                        formInputData={formData}
                        formValues={formValues}
                        updateFormValue={updateFormValue}
                        handleSubmitForm={handleSubmitForm}
                        handleDeleteBtn={handleDeleteBtn}
                        handleCancelBtn={handleCancelBtn}
                    />
                </div>
            )}
        </section>
    );
};
export default ItemList;
