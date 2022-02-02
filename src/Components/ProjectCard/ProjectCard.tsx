import styles from "./ProjectCard.module.css";
import "../../globals.css";
import IconGitHub from "../../../lib/Icons/Icon_GitHub.svg";
import IconExternal from "../../../lib/Icons/Icon_External.svg";
import { ProjectCardTypes } from "../../../types";

export default function ProjectCard({
  headline,
  description,
  projectImage,
  gitLink,
  projectLink,
  ...props
}: ProjectCardTypes) {
  return (
    <div className={styles.card} {...props}>
      <div className={styles["column-text"]}>
        <h3 className={styles.headline}>{headline}</h3>
        <p className={styles.copy}>{description}</p>
        <div className={styles["links-wrapper"]}>
          <a href={gitLink} className={styles.links}>
            <img src={IconGitHub} alt="Logo GitHub" />
            <span className={styles.link}>Link to Github</span>
          </a>
          {projectLink && (
            <a href={projectLink} className={styles.links}>
              <img src={IconExternal} alt="" />
              <span className={styles.link}>Link to Github {headline}</span>
            </a>
          )}
        </div>
      </div>
      <div className={styles["column-image"]}>
        <img
          className={styles["project-image"]}
          src={projectImage}
          alt={`Project image of ${headline}`}
        />
      </div>
    </div>
  );
}
