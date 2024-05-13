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
import ExperienceFormData from "./UserInfo/FormData/ExperienceFormData.js";
import ContractFormData from "./UserInfo/FormData/ContractFormData.js";
import SkillFormData from "./UserInfo/FormData/SkillFormData.js";

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
                infoSectionTitle="institute"
            />
            <InstituteInfo
                formData={ExperienceFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="work"
                sectionName="Experience"
                infoSectionTitle="institute"
            />
            <InstituteInfo
                formData={ContractFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="contract"
                sectionName="Contract"
                infoSectionTitle="email"
            />
            <InstituteInfo
                formData={SkillFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="psychology"
                sectionName="Skills"
                infoSectionTitle="skill"
            />
        </section>
    );
};
export default CvInfo;
