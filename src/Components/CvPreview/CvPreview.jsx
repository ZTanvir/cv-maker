import NameAndProfession from "./NameAndProfession";
import ProfilePicture from "./ProfilePicture";
import DisplayEduInstitutes from "./DisplayEduInstitutes";
import DisplayProfileDescription from "./DisplayProfileDescription";

const CvPreview = ({ cvInfo }) => {
    return (
        <main>
            <ProfilePicture />
            <NameAndProfession cvData={cvInfo} />
            <DisplayEduInstitutes cvData={cvInfo} />
            <DisplayProfileDescription cvData={cvInfo} />
        </main>
    );
};
export default CvPreview;
