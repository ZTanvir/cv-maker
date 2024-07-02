import styles from "../../../styles/customizeCv.module.css";

const CustomizeCv = ({ handleContent, handleCustomization }) => {
    return (
        <div className={styles.customizeCvContainer}>
            <div className={styles.description} onClick={handleContent}>
                <span className="material-symbols-outlined">description</span>
                Content
            </div>
            <div className={styles.customization} onClick={handleCustomization}>
                <span className="material-symbols-outlined">edit</span>
                Customization
            </div>
        </div>
    );
};

export default CustomizeCv;
