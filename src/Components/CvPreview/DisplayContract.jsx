import styles from "../../styles/CvPreview/displayContract.module.css";

const DisplayContract = ({ cvData }) => {
    const contact = cvData.contract;

    return (
        <section className={styles.contractInfo}>
            <h2>Contact</h2>
            {contact.map((item) => (
                <div className={styles.contactList} key={item.id}>
                    <div>
                        <p>Phone</p>
                        <p>{item.phoneNumber}</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <p>{item.email}</p>
                    </div>
                    <div>
                        <p>Address</p>
                        <p>{item.address}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default DisplayContract;
