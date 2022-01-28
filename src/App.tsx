import "./globals.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <h4 className={styles["preline-title"]}>Development x Design</h4>
        <h1 className={styles.title}>Hi, I’m David!</h1>
        <p className={styles.intro}>
          Ready for new challenges to shape digitalization as a Frontend
          Developer. With a flair for good design, the motivation to learn new
          things and the interest to develop relevant products together.
        </p>
      </header>
    </div>
  );
}

export default App;
