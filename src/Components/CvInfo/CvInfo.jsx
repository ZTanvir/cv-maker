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
import ItemList from "./UserInfo/ItemList";
import CvData from "../CvData";
import EducationFormData from "./UserInfo/FormData/EducationFormData";
import { useState } from "react";

const CvInfo = () => {
    const cvInfo = CvData;
    const [cvData, setCvData] = useState(cvInfo);
    const educationData = cvData.education;
    return (
        <section className="cvInfo">
            <PersonalDetails />
            <ToggleSection
                sectionIcon="school"
                sectionName="Education"
            ></ToggleSection>
            <ItemList
                formData={EducationFormData}
                userData={educationData}
                updateUserData={setCvData}
            />
        </section>
    );
};
export default CvInfo;
