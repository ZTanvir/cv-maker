import CvFonts from "./CustomizeCv/CvFonts";
import CustomizeColor from "./CustomizeCv/CustomizeColor";

const CvInfoCustomization = ({
    handleFontBtn,
    cvFont,
    handleColorBtn,
    cvColor,
}) => {
    return (
        <>
            <CvFonts handleFontBtn={handleFontBtn} cvFont={cvFont} />
            <CustomizeColor handleColorBtn={handleColorBtn} cvColor={cvColor} />
        </>
    );
};
export default CvInfoCustomization;
