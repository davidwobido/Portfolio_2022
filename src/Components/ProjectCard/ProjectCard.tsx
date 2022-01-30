import styles from "./ProjectCard.module.css";
import "../../globals.css";
import IconGitHub from "../../../lib/Icons/Icon_GitHub.svg";
import { ProjectCardTypes } from "../../../types";

export default function ProjectCard({
  logo,
  headline,
  description,
  gitLink,
  projectImage,
}: ProjectCardTypes) {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <img className={styles.logo} src={logo} alt="" />
        <h3 className={styles.headline}>{headline}</h3>
        <p className={styles.copy}>{description}</p>
        <div className={styles.links}>
          <a href={gitLink}>
            <img src={IconGitHub} alt="Logo GitHub" />
            <div className={styles.link}>Link to Github</div>
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={projectImage} alt={`Project image of ${headline}`} />
      </div>
    </div>
  );
}
