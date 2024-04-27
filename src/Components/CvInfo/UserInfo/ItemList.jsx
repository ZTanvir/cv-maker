// This is a reuseable component which will generate item list
// based on listData
// When click on an item it will generate a form with default value
// We can edit the form and submit to update the information

import { useState } from "react";
import CustomForm from "./CustomForm";
import Visibility from "./Visibility";
import AddInfoSection from "./AddInfoSection";

const ItemList = ({
    formData,
    formValuesObj,
    userData,
    userCvData,
    updateCvData,
}) => {
    const [formValues, setFormValues] = useState(formValuesObj);
    const [showHideSection, setShowHideSection] = useState(false);

    // console.log("userData", userData);
    // Get listData from userData
    const listData = userData;

    // Update userdata with new value
    const handleSubmitForm = (event) => {
        event.preventDefault();
        // get the id of the formValues
        const id = formValues.id;
        console.log(formValues, formValues.id);

        // update user institute infomation based on user id
        const updatedInstituteData = userData.map((institute) => {
            return institute.id === id
                ? { ...institute, ...formValues }
                : { ...institute };
        });
        const newInstituteData =
            id === true
                ? [...updatedInstituteData]
                : [
                      ...updatedInstituteData,
                      { id: crypto.randomUUID(), ...formValues },
                  ];
        id === true
            ? updateCvData({
                  ...userCvData,
                  education: [...newInstituteData],
              })
            : updateCvData({
                  ...userCvData,
                  education: [...newInstituteData],
              });
        // update cv data with new edited institute information

        // reset the form to it's initital value
        setFormValues({ ...formValuesObj });
        // hide edit insititute infromation form
        setShowHideSection(false);
    };
    console.log("cvData", userCvData);
    // Delete userdata
    const handleDeleteBtn = (event) => {
        const id = formValues.id;
        // remove user institute data based which has similar id as edited form id
        const updatedInstituteData = userData.filter((institute) => {
            console.log(institute.id, " found");
            return institute.id !== id;
        });
        // update cv data with new edited institute information
        updatedInstituteData
            ? updateCvData({
                  ...userCvData,
                  education: [...updatedInstituteData],
              })
            : null;
        // hide edit insitute infromation form
        setShowHideSection(false);
    };

    // Cancel updating institute information
    const handleCancelBtn = (event) => {
        // hide edit insitute infromation form
        setShowHideSection(false);
    };

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

    // get user types value in input fields
    const updateFormValue = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    // Add institute infromation will be visiable or not
    const updateVisibilityInfo = (id, isVisiable) => {
        const updatedInstituteData = userData.map((institute) => {
            return institute.id === id
                ? { ...institute, visibility: isVisiable }
                : { ...institute };
        });
        updateCvData({ ...userCvData, education: [...updatedInstituteData] });
    };
    const handleAddInfoBtn = () => {
        console.log("Clicked add education btn");
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
                                  <Visibility
                                      id={item.id}
                                      updateVisibilityInfo={
                                          updateVisibilityInfo
                                      }
                                  />
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

            <AddInfoSection
                addInfoBtnText="Education"
                handleAddInfoBtn={handleAddInfoBtn}
                formInputData={formData}
                formValues={formValues}
                updateFormValue={updateFormValue}
                handleSubmitForm={handleSubmitForm}
                handleDeleteBtn={handleDeleteBtn}
                handleCancelBtn={handleCancelBtn}
            />
        </section>
    );
};
export default ItemList;
