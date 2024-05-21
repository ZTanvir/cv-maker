import NameAndProfession from "./NameAndProfession";
import ProfilePicture from "./ProfilePicture";

const CvPreview = ({ cvInfo }) => {
    return (
        <main>
            <ProfilePicture />
            <NameAndProfession cvData={cvInfo} />
        </main>
    );
};
export default CvPreview;
