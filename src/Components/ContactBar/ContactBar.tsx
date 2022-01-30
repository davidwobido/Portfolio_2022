import styles from "./ContactBar.module.css";
import "../../globals.css";
import IconGitHub from "../../../lib/Icons/Icon_GitHub.svg";
import IconLastfm from "../../../lib/Icons/Icon_Lastfm.svg";
import IconLinkedIn from "../../../lib/Icons/Icon_LinkedIn.svg";
import IconMail from "../../../lib/Icons/Icon_Mail.svg";
import IconXing from "../../../lib/Icons/Icon_Xing.svg";

export default function ContactBar() {
  return (
    <div className={styles.bar}>
      <a href="https://github.com/davidwobido/">
        <img
          src={IconGitHub}
          className={styles["contact-icon"]}
          alt="GitHub"
        ></img>{" "}
      </a>
      <a href="https://www.linkedin.com/in/davidwobido/">
        <img
          src={IconLinkedIn}
          className={styles["contact-icon"]}
          alt="LinkedIn"
        ></img>
      </a>
      <a href="https://www.xing.com/profile/David_Wobido/cv">
        <img src={IconXing} className={styles["contact-icon"]} alt="Xing"></img>
      </a>
      <a href="mailto:davidwobido@googlemail.com">
        <img src={IconMail} className={styles["contact-icon"]} alt="Mail"></img>
      </a>
      <a href="https://www.last.fm/de/user/wobe_teh_Onsk">
        <img
          src={IconLastfm}
          className={styles["contact-icon"]}
          alt="LastFM"
        ></img>
      </a>
    </div>
  );
}
