// This is a reuseable component
// It show institute infomation of an user
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
    const educationData = cvData[sectionName.toLowerCase()];
    const formvaluesobj = generateObjectFromArrayOfObject(formData, "name");

    return (
        <>
            <ToggleSection sectionIcon={sectionIcon} sectionName={sectionName}>
                <InstituteList
                    formData={formData}
                    formValuesObj={formvaluesobj}
                    userData={educationData}
                    userCvData={cvData}
                    updateCvData={setCvData}
                    addInstituteBtnName={sectionName}
                />
            </ToggleSection>
        </>
    );
};
export default instituteInfo;
