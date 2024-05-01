// This is a reuseable component
// It shows institute infomation of an user
// user can edit,add new institute information

import ToggleSection from "./ToggleSection";
import InstituteList from "./InstituteList";
import { generateObjectFromArrayOfObject } from "../../../utils/helpers";

const instituteInfo = ({
    formData,
    cvData,
    setCvData,
    sectionIcon,
    sectionName,
}) => {
    // InstituteData provided by user
    const instituteData = cvData[sectionName.toLowerCase()];
    // Create form values object from form data
    const formvaluesobj = generateObjectFromArrayOfObject(formData, "name");

    return (
        <>
            <ToggleSection sectionIcon={sectionIcon} sectionName={sectionName}>
                <InstituteList
                    formData={formData}
                    formValuesObj={formvaluesobj}
                    userData={instituteData}
                    userCvData={cvData}
                    updateCvData={setCvData}
                    addInstituteBtnName={sectionName}
                />
            </ToggleSection>
        </>
    );
};
export default instituteInfo;
