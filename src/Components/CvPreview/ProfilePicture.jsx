import { useRef, useState } from "react";
import DefaultProfileImg from "../../assets/Images/placeholderProfileImg.jpg";

const ProfilePicture = ({}) => {
    const [profilePicture, setProfilePicture] = useState(DefaultProfileImg);
    const inputFileEl = useRef(null);

    const handleProfilePicture = (e) => {
        e.preventDefault();
        const uploadFile = inputFileEl.current.files[0];
        console.log(uploadFile);
        const cachedUrl = URL.createObjectURL(uploadFile);
        console.log(cachedUrl);
        setProfilePicture(cachedUrl);
    };
    // Default image as a placeholder
    // User can upload an image
    // New image will be replace the old one

    return (
        <section>
            <img src={profilePicture} alt="profile picture" />

            <form onSubmit={handleProfilePicture}>
                <input
                    ref={inputFileEl}
                    type="file"
                    name="profilePicture"
                    id="profileImage"
                    accept="image/*"
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};
export default ProfilePicture;
