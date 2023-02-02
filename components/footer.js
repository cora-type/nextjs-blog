import styles from "./layout.module.css";

export default function Footer() {
  return (
    <div className={styles.backToHome}>
      <div className={styles.shadowBottomBar}></div>
      <div className={styles.cmdK}> ⌘ + k </div>
    </div>
  );
}
