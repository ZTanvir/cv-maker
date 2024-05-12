// This is a reuseable component which will generate item list
// based on listData
// When click on an item it will generate a form with default value
// We can edit the form and submit to update the information

import { useState } from "react";
import CustomForm from "./CustomForm";
import Visibility from "./Visibility";
import AddInfoButton from "./AddInfoButton";
import styles from "../../../styles/instituteList.module.css";

const InstituteList = ({
    formData,
    formValuesObj,
    sectionTitle,
    userData,
    userCvData,
    updateCvData,
    infoSectionTitle,
    addInstituteBtnName,
}) => {
    const [formValues, setFormValues] = useState(formValuesObj);
    const [hideSection, setHideSection] = useState(false);
    console.log(infoSectionTitle);

    // Update userdata with new value
    const handleSubmitForm = (event) => {
        event.preventDefault();
        // get the id of the formValues
        const updatedInstituteId = formValues.id;

        // update user institute infomation based on user id
        const updatedInstituteData = userData.map((institute) => {
            return institute.id === updatedInstituteId
                ? { ...institute, ...formValues }
                : { ...institute };
        });
        /* if a form data is loaded form list of institutes
        That means the form data is already in out dataset
        so update the changed form data only */

        /*  When we add new form data to the dataset add from data
        along with unique id and visibility to the list */
        const newInstituteData = Boolean(updatedInstituteId)
            ? [...updatedInstituteData]
            : [
                  ...updatedInstituteData,
                  { id: crypto.randomUUID(), visibility: true, ...formValues },
              ];
        Boolean(updatedInstituteId)
            ? updateCvData({
                  ...userCvData,
                  [sectionTitle]: [...newInstituteData],
              })
            : updateCvData({
                  ...userCvData,
                  [sectionTitle]: [...newInstituteData],
              });
        // update cv data with new edited institute information

        // reset the form to it's initital value
        setFormValues({ ...formValuesObj });
        // hide form that let us edit insititute information
        setHideSection(false);
    };

    // Delete userdata
    const handleDeleteBtn = (event) => {
        const id = formValues.id;
        // remove user institute data based which has similar id as edited form id
        const updatedInstituteData = userData.filter((institute) => {
            return institute.id !== id;
        });
        // update cv data with new edited institute information
        updatedInstituteData
            ? updateCvData({
                  ...userCvData,
                  [sectionTitle]: [...updatedInstituteData],
              })
            : null;
        // hide form that let us edit insititute information
        setHideSection(false);
    };

    // Cancel updating institute information
    const handleCancelBtn = (event) => {
        // Set form values to its initial state
        setFormValues({ ...formValuesObj });
        // hide form that let us edit insititute information
        setHideSection(false);
    };

    // view or update institute information
    const handleInstituteInfo = (event) => {
        const instituteId = event.target.getAttribute("data-institute-id");
        // get data of the instituteName
        const instituteData = userData.filter(
            (data) => data.id === instituteId
        )[0];
        setFormValues({ ...instituteData });
        // show edit institute form section
        setHideSection(true);
    };

    // get user types value in input fields
    const updateFormValue = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    // Add institute information will be visiable or not
    const handleVisibilityInfo = (instituteId, isVisiable) => {
        const updatedInstituteData = userData.map((institute) => {
            return institute.id === instituteId
                ? { ...institute, visibility: isVisiable }
                : { ...institute };
        });
        updateCvData({
            ...userCvData,
            [sectionTitle]: [...updatedInstituteData],
        });
    };
    const handleAddInfoBtn = () => {
        // poplution form controller with default form values
        setFormValues({ ...formValuesObj });
        // show-hide list of institute section
        setHideSection(true);
    };
    return (
        <section>
            <div className="instituteList">
                {!hideSection && (
                    <div className={styles.listItem}>
                        {/* Generate institute based on user data */}
                        {userData.length > 0
                            ? userData.map((item) => (
                                  <div
                                      className={styles.instituteName}
                                      key={item.id}
                                  >
                                      <span
                                          data-institute-id={item.id}
                                          onClick={handleInstituteInfo}
                                      >
                                          {item[infoSectionTitle]}
                                      </span>
                                      <Visibility
                                          id={item.id}
                                          isVisible={item.visibility}
                                          updateVisibilityInfo={
                                              handleVisibilityInfo
                                          }
                                      />
                                  </div>
                              ))
                            : null}
                    </div>
                )}
                {/* Show or hide institute Form when user want to edit institute data
                or add new institute data
                */}
                {hideSection && (
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
            </div>
            <div className="addInstituteBtn">
                {/* Show add institute information form when click on + button */}
                {!hideSection && (
                    <AddInfoButton
                        btnIcon="Add"
                        buttonName={addInstituteBtnName}
                        handleButton={handleAddInfoBtn}
                    />
                )}
            </div>
        </section>
    );
};
export default InstituteList;
