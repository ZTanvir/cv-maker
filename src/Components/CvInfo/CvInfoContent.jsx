import PersonalDetails from "./PersonalDetails/PersonalDetails";
import InstituteInfo from "./UserInfo/InstituteInfo";
import EducationFormData from "./UserInfo/FormData/EducationFormData";
import ExperienceFormData from "./UserInfo/FormData/ExperienceFormData.js";
import ContractFormData from "./UserInfo/FormData/ContractFormData.js";
import SkillFormData from "./UserInfo/FormData/SkillFormData.js";
import { useState } from "react";

const CvInfoContent = ({
    cvData,
    setCvData,
    resetPersonalDetailsForm,
    loadPersonalDetailsForm,
}) => {
    // Toggle section
    const [activeIndex, setActiveIndex] = useState(false);
    return (
        <>
            <PersonalDetails
                cvData={cvData}
                updateCvData={setCvData}
                resetPersonalDetailsForm={resetPersonalDetailsForm}
                loadPersonalDetailsForm={loadPersonalDetailsForm}
            />
            <InstituteInfo
                formData={EducationFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="school"
                sectionName="Education"
                infoSectionTitle="institute"
                activeIndex={activeIndex === 1}
                handleToggleSection={(e) =>
                    activeIndex === 1
                        ? setActiveIndex(false)
                        : setActiveIndex(1)
                }
            />
            <InstituteInfo
                formData={ExperienceFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="work"
                sectionName="Experience"
                infoSectionTitle="institute"
                activeIndex={activeIndex === 2}
                handleToggleSection={(e) =>
                    activeIndex === 2
                        ? setActiveIndex(false)
                        : setActiveIndex(2)
                }
            />
            <InstituteInfo
                formData={ContractFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="contract"
                sectionName="Contract"
                infoSectionTitle="email"
                activeIndex={activeIndex === 3}
                handleToggleSection={(e) =>
                    activeIndex === 3
                        ? setActiveIndex(false)
                        : setActiveIndex(3)
                }
            />
            <InstituteInfo
                formData={SkillFormData}
                cvData={cvData}
                setCvData={setCvData}
                sectionIcon="psychology"
                sectionName="Skills"
                infoSectionTitle="skill"
                activeIndex={activeIndex === 4}
                handleToggleSection={(e) =>
                    activeIndex === 4
                        ? setActiveIndex(false)
                        : setActiveIndex(4)
                }
            />
        </>
    );
};
export default CvInfoContent;
