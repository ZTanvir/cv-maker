import { useState } from "react";
import styles from "../../../styles/visibility.module.css";

const Visibility = ({ id, isVisible, updateVisibilityInfo }) => {
    const [visibility, setVisibility] = useState(isVisible);
    const handleVisibility = () => {
        // React state update are asynchronous
        // to get the updated state value we have stored state value to a variable
        const visible = visibility;
        updateVisibilityInfo(id, !visible);
        setVisibility(!visibility);
    };

    return (
        <span
            className={`material-symbols-outlined ${styles.showHideIcon}`}
            data-institute-id={id}
            title={visibility === true ? "Hide" : "Show"}
            onClick={handleVisibility}
        >
            {visibility === true ? "visibility" : "visibility_off"}
        </span>
    );
};
export default Visibility;
