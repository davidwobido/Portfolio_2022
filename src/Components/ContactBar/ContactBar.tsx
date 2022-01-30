import styles from "./ContactBar.module.css";
import "../../globals.css";
import GitHub from "../../../lib/Icons/Icon_GitHub.svg";
import Lastfm from "../../../lib/Icons/Icon_Lastfm.svg";
import LinkedIn from "../../../lib/Icons/Icon_LinkedIn.svg";
import Mail from "../../../lib/Icons/Icon_Mail.svg";
import Xing from "../../../lib/Icons/Icon_Xing.svg";

export default function ContactBar() {
  return (
    <div className={styles.bar}>
      <a href="https://github.com/davidwobido/">
        <img src={GitHub} className={styles["contact-icon"]} alt="GitHub"></img>{" "}
      </a>
      <a href="https://www.linkedin.com/in/davidwobido/">
        <img
          src={LinkedIn}
          className={styles["contact-icon"]}
          alt="LinkedIn"
        ></img>
      </a>
      <a href="https://www.xing.com/profile/David_Wobido/cv">
        <img src={Xing} className={styles["contact-icon"]} alt="Xing"></img>
      </a>
      <a href="mailto:davidwobido@googlemail.com">
        <img src={Mail} className={styles["contact-icon"]} alt="Mail"></img>
      </a>
      <a href="https://www.last.fm/de/user/wobe_teh_Onsk">
        <img src={Lastfm} className={styles["contact-icon"]} alt="LastFM"></img>
      </a>
    </div>
  );
}
