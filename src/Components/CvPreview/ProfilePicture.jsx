import { useRef, useState } from "react";

const ProfilePicture = ({}) => {
    const [profilePicture, setProfilePicture] = useState("");
    const imageEl = useRef(null);

    const handleProfilePicture = (e) => {
        e.preventDefault();
        console.log(profilePicture);
    };
    return (
        <section>
            <form onSubmit={handleProfilePicture}>
                <input
                    value={profilePicture}
                    onChange={(e) => {
                        console.log(e.target.files[0]);
                    }}
                    type="file"
                    name="profilePicture"
                    id="profileImage"
                    accept="image/*"
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <img src={profilePicture} alt="profile picture" />
            </div>
        </section>
    );
};
export default ProfilePicture;
