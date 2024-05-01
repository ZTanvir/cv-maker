import { useState } from "react";

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
            className="material-symbols-outlined"
            data-institute-id={id}
            title={visibility === true ? "Hide" : "Show"}
            onClick={handleVisibility}
        >
            {visibility === true ? "visibility" : "visibility_off"}
        </span>
    );
};
export default Visibility;
