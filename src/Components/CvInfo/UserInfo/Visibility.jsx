import { useState } from "react";

const Visibility = ({ id, updateVisibilityInfo }) => {
    const [visibility, setVisibility] = useState(true);
    const handleVisibility = () => {
        // React state update are asynchronous
        // to get the updated state value we have stored state value to a variable
        const isVisiable = visibility;
        updateVisibilityInfo(!isVisiable, id);
        setVisibility(!visibility);
    };

    return (
        <span
            className="material-symbols-outlined"
            data-institute-id={id}
            onClick={handleVisibility}
        >
            {visibility === true ? "visibility" : "visibility_off"}
        </span>
    );
};
export default Visibility;
