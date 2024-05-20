import { useRef, useState } from "react";
import DefaultProfileImg from "../../assets/Images/placeholderProfileImg.jpg";
import styles from "../../styles/profilePicture.module.css";

const ProfilePicture = ({}) => {
    const [profilePicture, setProfilePicture] = useState(DefaultProfileImg);
    const inputFileEl = useRef(null);

    const handleProfilePicture = (e) => {
        e.preventDefault();
        inputFileEl.current.click();
        const uploadFile = inputFileEl.current.files[0];
        const cachedUrl = URL.createObjectURL(uploadFile);
        setProfilePicture(cachedUrl);
    };
    // Default image as a placeholder
    // User can upload an image
    // New image will be replace the old one

    return (
        <section>
            <img
                className={styles.profileImage}
                src={profilePicture}
                alt="profile picture"
            />

            <form onSubmit={handleProfilePicture}>
                <input
                    ref={inputFileEl}
                    type="file"
                    name="profilePicture"
                    id="profileImage"
                    accept="image/*"
                />
                <button type="button">
                    <span className="material-symbols-outlined">upload</span>
                </button>
                <button
                    className={styles.submitBtn}
                    type="submit"
                    hidden
                ></button>
            </form>
        </section>
    );
};
export default ProfilePicture;
