/* In front user will see
 *Personal Details
 *Education
 *Professional Experience
 *Contract
 *Skills
 form fields
 */
import CvInfoContent from "./CvInfoContent.jsx";
import CvDataControl from "../CvInfo/CvDataControl/CvDataControl.jsx";
import CustomizeCv from "./CustomizeCv/CustomizeCv.jsx";
import CvInfoCustomization from "./CvInfoCustomization.jsx";

import styles from "../../styles/cvInfo.module.css";
import { useState } from "react";

const CvInfo = ({
    cvData,
    setCvData,
    handleClearBtn,
    handleLoadBtn,
    handleFontBtn,
    cvFont,
    handleColorBtn,
    cvColor,
}) => {
    const [displaySection, setDisplaySection] = useState("content");

    const handleContent = () => {
        setDisplaySection("content");
    };
    const handleCustomization = () => {
        setDisplaySection("customization");
    };

    return (
        <section className={styles.cvInFo}>
            <CustomizeCv
                handleContent={handleContent}
                handleCustomization={handleCustomization}
                displaySection={displaySection}
            />
            <CvDataControl
                handleClearBtn={handleClearBtn}
                handleLoadBtn={handleLoadBtn}
            />
            {Boolean(displaySection === "content") ? (
                <div className={styles.cvInFo}>
                    <CvInfoContent cvData={cvData} setCvData={setCvData} />
                </div>
            ) : (
                <div className={styles.customizeCvSection}>
                    <CvInfoCustomization
                        handleFontBtn={handleFontBtn}
                        cvFont={cvFont}
                        handleColorBtn={handleColorBtn}
                        cvColor={cvColor}
                    />
                </div>
            )}
        </section>
    );
};
export default CvInfo;
