import styles from "../../styles/CvPreview/displayContract.module.css";

const DisplayContract = ({ cvData }) => {
  const contact = cvData.contract;

  return (
    <section className={styles.contractInfo}>
      <h2>Contact</h2>
      <div className="borderBottom"></div>
      {contact.map((item) =>
        item.visibility === true ? (
          <div className={styles.contactList} key={item.id}>
            <div className={styles.contactItem}>
              <div className={styles.phoneDetails}>
                <span className="material-symbols-outlined">call</span>
                <span>Phone</span>
              </div>
              <p>{item.phoneNumber}</p>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.mailDetails}>
                <span className="material-symbols-outlined">mail</span>
                <span>Email</span>
              </div>
              <p>{item.email}</p>
            </div>
            <address className={styles.contactItem}>
              <div className={styles.addressDetails}>
                <span className="material-symbols-outlined">home</span>
                <span>Address</span>
              </div>
              <p>{item.address}</p>
            </address>
          </div>
        ) : null
      )}
    </section>
  );
};
export default DisplayContract;
