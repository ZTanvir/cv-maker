import styles from "../../styles/CvPreview/displayContract.module.css";

const DisplayContract = ({ cvData }) => {
  const contact = cvData.contract;

  return (
    <section className={styles.contractInfo}>
      <h2>Contact</h2>
      {contact.map((item) =>
        item.visibility === true ? (
          <div className={styles.contactList} key={item.id}>
            <div className={styles.contactItem}>
              <p>Phone</p>
              <p>{item.phoneNumber}</p>
            </div>
            <div className={styles.contactItem}>
              <p>Email</p>
              <p>{item.email}</p>
            </div>
            <div className={styles.contactItem}>
              <p>Address</p>
              <p>{item.address}</p>
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};
export default DisplayContract;
