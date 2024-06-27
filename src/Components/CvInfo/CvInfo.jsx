/* In front user will see
 *Personal Details
 *Education
 *Professional Experience
 *Contract
 *Skills
 form fields
 */
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import EducationFormData from "./UserInfo/FormData/EducationFormData";
import ExperienceFormData from "./UserInfo/FormData/ExperienceFormData.js";
import ContractFormData from "./UserInfo/FormData/ContractFormData.js";
import SkillFormData from "./UserInfo/FormData/SkillFormData.js";
import InstituteInfo from "./UserInfo/InstituteInfo.jsx";
import CvDataControl from "../CvInfo/CvDataControl/CvDataControl.jsx";

import styles from "../../styles/cvInfo.module.css";
import { useState } from "react";

const CvInfo = ({ cvData, setCvData }) => {
    // Toggle section
    const [activeIndex, setActiveIndex] = useState(false);

    const handleClearBtn = (e) => {
        console.log("Clear Btn");
    };
    const handleLoadBtn = (e) => {
        console.log("Load btn");
    };

    return (
        <section className={styles.cvInFo}>
            <CvDataControl
                handleClearBtn={handleClearBtn}
                handleLoadBtn={handleLoadBtn}
            />
            <PersonalDetails cvData={cvData} updateCvData={setCvData} />
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
        </section>
    );
};
export default CvInfo;
