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
import { generateObjectFromArrayOfObject, foo } from "../../utils/helpers.js";
import { useState } from "react";

const CvInfo = () => {
    const cvInfo = CvData;
    const [cvData, setCvData] = useState(cvInfo);
    console.log(cvData);
    const educationData = cvData.education;

    const formValuesObj = generateObjectFromArrayOfObject(
        EducationFormData,
        "name"
    );

    return (
        <section className="cvInfo">
            <PersonalDetails />
            <ToggleSection
                sectionIcon="school"
                sectionName="Education"
            ></ToggleSection>
            <ItemList
                formData={EducationFormData}
                formValuesObj={formValuesObj}
                userData={educationData}
                updateUserData={setCvData}
            />
        </section>
    );
};
export default CvInfo;
