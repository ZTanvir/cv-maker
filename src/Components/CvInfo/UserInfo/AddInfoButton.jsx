/* This is reuseable component
    It will generate a button with a prefered icon and button name
*/
import styles from "../../../styles/addInfoButton.module.css";

const AddInfoButton = ({ btnIcon, buttonName, handleButton }) => {
    return (
        <div className={styles.addInfoButtonSection}>
            <button onClick={handleButton} type="button">
                {/* add */}
                <span className="material-symbols-outlined">{btnIcon}</span>
                <span>{buttonName}</span>
            </button>
        </div>
    );
};
export default AddInfoButton;
