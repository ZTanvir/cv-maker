// This is a reuseable component which task is to
// Show or hide section based on user click

const ToggleSection = (props) => {
    const { children } = props;
    const handleToggleSection = (event) => {};
    return (
        <div onClick={handleToggleSection}>
            <div>
                <span>
                    <span></span> {sectionName}
                </span>
                <span></span>
            </div>
            <div>{children}</div>
        </div>
    );
};
export default ToggleSection;
