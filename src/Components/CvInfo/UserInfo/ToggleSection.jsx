// This is a reuseable component which task is to
// Show or hide section based on user click

import { useState } from "react";

const ToggleSection = (props) => {
    const { sectionIcon, sectionName, children } = props;

    const [isShown, setIsShown] = useState(false);

    const handleToggleSection = (event) => {
        setIsShown(!isShown);
    };

    return (
        <div>
            <div onClick={handleToggleSection}>
                <span>
                    {/* school */}
                    <span className="material-symbols-outlined">
                        {sectionIcon}
                    </span>
                    {sectionName}
                </span>
                <span className="material-symbols-outlined">
                    {isShown === true ? "expand_more" : "expand_less"}
                </span>
            </div>

            {/* hide or show this section when user click */}
            {isShown === true ? <div>{children}</div> : null}
        </div>
    );
};
export default ToggleSection;
