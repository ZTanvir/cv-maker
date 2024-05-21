import { useRef, useState } from "react";
import avatarPlaceHolder from "../../assets/Images/avatarPlaceHolder.png";
import styles from "../../styles/profilePicture.module.css";

const ProfilePicture = ({}) => {
    const [profilePicture, setProfilePicture] = useState(avatarPlaceHolder);
    const inputFileEl = useRef(null);

    const handleUploadImg = (e) => {
        inputFileEl.current.click();
    };

    const handleProfilePicture = (e) => {
        e.preventDefault();
        const uploadFile = inputFileEl.current.files[0];
        const cachedUrl = URL.createObjectURL(uploadFile);
        setProfilePicture(cachedUrl);
    };

    return (
        <section className={styles.profileImageContainer}>
            <form
                className={styles.uploadImageForm}
                encType="multipart/form-data"
            >
                <div>
                    <img
                        className={styles.profileImage}
                        src={profilePicture}
                        alt="profile picture"
                    />
                    <button
                        className={styles.uploadBtn}
                        type="button"
                        onClick={handleUploadImg}
                    >
                        <span className="material-symbols-outlined">
                            upload
                        </span>
                    </button>
                </div>

                <input
                    onChange={handleProfilePicture}
                    ref={inputFileEl}
                    type="file"
                    name="profilePicture"
                    id="profileImage"
                    accept="image/*"
                    hidden
                />
            </form>
        </section>
    );
};
export default ProfilePicture;
