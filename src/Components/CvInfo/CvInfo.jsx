/* In front user will see
 *Personal Details
 *Education
 *Professional Experience
 *Contract
 *Skills
 form fields
 */
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ToggleSection from "./UserInfo/ToggleSection";
import InstituteList from "./UserInfo/InstituteList.jsx";
import CvData from "../CvData";
import EducationFormData from "./UserInfo/FormData/EducationFormData";
import { generateObjectFromArrayOfObject, foo } from "../../utils/helpers.js";
import { useState } from "react";

const CvInfo = () => {
    const cvInfo = CvData;
    const [cvData, setCvData] = useState(cvInfo);

    const educationData = cvData.education;

    const formValuesObj = generateObjectFromArrayOfObject(
        EducationFormData,
        "name"
    );

    return (
        <section className="cvInfo">
            <PersonalDetails />
            <ToggleSection sectionIcon="school" sectionName="Education">
                <InstituteList
                    formData={EducationFormData}
                    formValuesObj={formValuesObj}
                    userData={educationData}
                    userCvData={cvData}
                    updateCvData={setCvData}
                />
            </ToggleSection>
        </section>
    );
};
export default CvInfo;
