import styles from "./ui.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Gizmo</h1>
      <h2 className={styles.subTitle}>Find the Best Articles Here.</h2>
    </section>
  );
};

export default Hero;
