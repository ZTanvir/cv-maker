// This is a reuseable component which task is to
// Show or hide section based on user click

import { useState } from "react";
import styles from "../../../styles/toggleSection.module.css";

const ToggleSection = (props) => {
    const { sectionIcon, sectionName, children } = props;

    const [isShown, setIsShown] = useState(false);

    const handleToggleSection = (event) => {
        setIsShown(!isShown);
    };

    return (
        <section className={styles.toggleSection}>
            <button
                className={styles.toggleButton}
                style={
                    isShown ? { marginBottom: "5px" } : { marginBottom: "0px" }
                }
                onClick={handleToggleSection}
            >
                <span className={styles.sectionNameIcon}>
                    {/* school */}
                    <span className="material-symbols-outlined">
                        {sectionIcon}
                    </span>
                    <span>{sectionName}</span>
                </span>
                <span className="material-symbols-outlined">
                    {isShown === true ? "expand_less" : "expand_more"}
                </span>
            </button>

            {/* hide or show this section when user click */}
            {isShown === true ? (
                <div className={styles.toggleChild}>{children}</div>
            ) : null}
        </section>
    );
};
export default ToggleSection;
