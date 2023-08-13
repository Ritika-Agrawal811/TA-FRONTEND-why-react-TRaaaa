import styles from "./layout.module.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer className={styles.footer}>
      <p>{today.getFullYear()} All rights reserved.</p>

      <div className="flex">
        <span className={styles.icon}>F</span>
        <span className={styles.icon}>T</span>
        <span className={styles.icon}>I</span>
      </div>
    </footer>
  );
};

export default Footer;
