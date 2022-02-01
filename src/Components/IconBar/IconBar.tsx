import styles from "./IconBar.module.css";
import { IconBarTypes } from "../../../types";

function IconBar({ links, headline }: IconBarTypes) {
  return (
    <div className={styles.wrapper}>
      <h3>{headline}</h3>
      <div className={styles.bar}>
        {links.map((icon: string, index: number) => (
          <img src={icon} key={index} />
        ))}
      </div>
    </div>
  );
}

export default IconBar;
