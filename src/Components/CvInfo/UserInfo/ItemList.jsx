// This is a reuseable component which will generate item list
// based on listData
// When click on an item it will generate a form with default value
// We can edit the form and submit to update the information

import { useState } from "react";
import CustomForm from "./CustomForm";

const ItemList = ({ formData, userData, updateUserData }) => {
    // Get listData from userData
    const listData = userData;
    console.log(userData);
    //
    const defaultFormData = {};
    // Update userdata with new value
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());
        const formDataWithId = { id: crypto.randomUUID(), ...formData };
        console.log(formDataWithId);
    };
    // Delete userdata
    const handleDeleteBtn = () => {};
    // Hide form
    const handleCancelBtn = () => {};
    // Show or hide form based on click on visibility
    const handleVisibility = (event) => {
        console.log(event.target);
        // show or hide insitute infomation from cv
    };

    return (
        <section>
            <div className="listItem">
                {listData.length > 0
                    ? listData.map((item) => (
                          <div key={item.id}>
                              <span>{item.institute}</span>
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
