import { useState } from "react";
import styles from "../../../styles/customizeCv.module.css";

const CustomizeCv = ({
    displaySection,
    handleContent,
    handleCustomization,
}) => {
    return (
        <div className={styles.customizeCvContainer}>
            <div
                data-selected={displaySection === "content"}
                className={styles.description}
                onClick={handleContent}
            >
                <span className="material-symbols-outlined">description</span>
                Content
            </div>
            <div
                data-selected={displaySection === "customization"}
                className={styles.customization}
                onClick={handleCustomization}
            >
                <span className="material-symbols-outlined">edit</span>
                Customization
            </div>
        </div>
    );
};

export default CustomizeCv;
