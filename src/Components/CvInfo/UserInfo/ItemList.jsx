// This is a reuseable component which will generate item list
// based on listData
// When click on an item it will generate a form with default value
// We can edit the form and submit to update the information

import { useState } from "react";
import CustomForm from "./CustomForm";

const ItemList = ({ formData, userData, updateUserData }) => {
    const [defaultFormData, setDefaultFormData] = useState({});
    // Get listData from userData
    const listData = userData;
    console.log(userData);
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
    // view or update institute information
    const handleInstituteInfo = (event) => {
        console.log(event.target.getAttribute("data-institute-id"));
        const instituteId = event.target.getAttribute("data-institute-id");
        // get data of the instituteName
        const instituteData = listData.filter(
            (data) => data.id === instituteId
        )[0];
        console.log(instituteData);
        setDefaultFormData(instituteData);
    };
    // Show or hide form based on click on visibility
    const handleVisibility = (event) => {
        console.log(event.target);
        // show or hide insitute infomation from cv
    };
    console.log("---Render---");

    return (
        <section>
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
