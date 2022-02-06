import styles from "./Header.module.css";
import HeaderImageLeft from "../../../lib/Images/Header_Image_left.svg";
import HeaderImageRight from "../../../lib/Images/Header_Image_right.svg";
import { useState } from "react";

function Header() {
  const [scrollDown, setScrollDown] = useState(true);

  setTimeout(() => {
    setScrollDown(false);
  }, 3000);

  return (
    <>
      <header className={styles["app-header"]}>
        <h4 className={styles.name}>David Wobido</h4>
        <h4 className={styles.description}>Frontend Developer</h4>
        <div className={styles["header-text"]}>
          <h4 className={styles["preline-title"]}>Development &#215; Design</h4>
          <h1 className={styles.title}>
            Ready for <br />
            new challenges
          </h1>
        </div>
        <div className={styles["header-image"]}>
          <img src={HeaderImageLeft} className={styles["image-left"]} />
          <img src={HeaderImageRight} className={styles["image-right"]} />
        </div>
        {scrollDown && (
          <div className={styles.scroll}>
            <span className={styles["scroll-text"]}>Scroll down</span>
            <div className={styles["scroll-animation"]} />
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
