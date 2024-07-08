import styles from "../../../styles/customizeColor.module.css";
const CustomizeColor = ({ cvColor, handleColorBtn }) => {
    const colors = [
        {
            id: crypto.randomUUID(),
            name: "Thistle",
            value: "#CDB4DB",
        },
        {
            id: crypto.randomUUID(),
            name: "Fairy Tale",
            value: "#FFC8DD",
        },
        {
            id: crypto.randomUUID(),
            name: "Carnation Pink",
            value: "#FFAFCC",
        },
        {
            id: crypto.randomUUID(),
            name: "Uranian Blue",
            value: "#BDE0FE",
        },
        {
            id: crypto.randomUUID(),
            name: "Light Sky Blue",
            value: "#A2D2FF",
        },
    ];

    return (
        <section className={styles.CustomizeColorContainer}>
            <h2>Colors</h2>
            <div className={styles.colorsGroup}>
                {colors.map((color) => (
                    <button
                        onClick={handleColorBtn}
                        style={{ backgroundColor: color.value }}
                        data-colorcode={`${color.value};${
                            cvColor === color.value
                        }`}
                        key={color.id}
                    ></button>
                ))}
            </div>
        </section>
    );
};
export default CustomizeColor;
