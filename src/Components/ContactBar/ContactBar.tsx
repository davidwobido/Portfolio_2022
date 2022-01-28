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
      <img src={GitHub} className={styles["contact-icon"]}></img>
      <img src={LinkedIn} className={styles["contact-icon"]}></img>
      <img src={Xing} className={styles["contact-icon"]}></img>
      <img src={Mail} className={styles["contact-icon"]}></img>
      <img src={Lastfm} className={styles["contact-icon"]}></img>
    </div>
  );
}
