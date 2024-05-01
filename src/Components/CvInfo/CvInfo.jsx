/* In front user will see
 *Personal Details
 *Education
 *Professional Experience
 *Contract
 *Skills
 form fields
 */
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import CvData from "../CvData";
import EducationFormData from "./UserInfo/FormData/EducationFormData";
import { generateObjectFromArrayOfObject, foo } from "../../utils/helpers.js";
import { useState } from "react";
import InstituteInfo from "./UserInfo/InstituteInfo.jsx";

const CvInfo = () => {
    const cvInfo = CvData;
    const [cvData, setCvData] = useState(cvInfo);

    return (
        <section className="cvInfo">
            <PersonalDetails />
            <InstituteInfo
                formData={EducationFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="school"
                sectionName="Education"
            />
        </section>
    );
};
export default CvInfo;
