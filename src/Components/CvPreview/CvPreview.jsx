import NameAndProfession from "./NameAndProfession";
import ProfilePicture from "./ProfilePicture";
import DisplayEduInstitutes from "./DisplayEduInstitutes";
import DisplayProfileDescription from "./DisplayProfileDescription";
import DisplayExperience from "./DisplayExperience";
import DisplayContract from "./DisplayContract";

const CvPreview = ({ cvInfo }) => {
    return (
        <main>
            <ProfilePicture />
            <NameAndProfession cvData={cvInfo} />
            <DisplayEduInstitutes cvData={cvInfo} />
            <DisplayProfileDescription cvData={cvInfo} />
            <DisplayExperience cvData={cvInfo} />
            <DisplayContract cvData={cvInfo} />
        </main>
    );
};
export default CvPreview;
