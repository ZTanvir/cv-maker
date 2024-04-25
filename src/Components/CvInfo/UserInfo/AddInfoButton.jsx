/* This is reuseable component
    It will generate a button with a prefered icon and button name
*/
const AddInfoButton = ({ btnIcon, buttonName, handleButton }) => {
    return (
        <button onClick={handleButton} type="button">
            {/* add */}
            <span className="material-symbols-outlined">{btnIcon}</span>
            <span>{buttonName}</span>
        </button>
    );
};
export default AddInfoButton;
