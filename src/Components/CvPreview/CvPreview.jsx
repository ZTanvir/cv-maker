import NameAndProfession from "./NameAndProfession";
import ProfilePicture from "./ProfilePicture";
import DisplayEduInstitutes from "./DisplayEduInstitutes";

const CvPreview = ({ cvInfo }) => {
    return (
        <main>
            <ProfilePicture />
            <NameAndProfession cvData={cvInfo} />
            <DisplayEduInstitutes cvData={cvInfo} />
        </main>
    );
};
export default CvPreview;
