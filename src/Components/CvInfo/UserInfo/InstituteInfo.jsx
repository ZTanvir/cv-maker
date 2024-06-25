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
    infoSectionTitle,
    activeIndex,
    handleToggleSection,
}) => {
    const sectionTitle = sectionName.toLowerCase();
    // InstituteData provided by user
    const instituteData = cvData[sectionTitle];
    // Create form values object from form data
    const formvaluesobj = generateObjectFromArrayOfObject(formData, "name");
    return (
        <>
            <ToggleSection
                sectionIcon={sectionIcon}
                sectionName={sectionName}
                isShown={activeIndex}
                handleToggle={handleToggleSection}
            >
                <InstituteList
                    formData={formData}
                    formValuesObj={formvaluesobj}
                    sectionTitle={sectionTitle}
                    userData={instituteData}
                    userCvData={cvData}
                    updateCvData={setCvData}
                    addInstituteBtnName={sectionName}
                    infoSectionTitle={infoSectionTitle}
                />
            </ToggleSection>
        </>
    );
};
export default instituteInfo;
