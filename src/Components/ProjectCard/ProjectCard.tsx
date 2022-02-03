import styles from "./ProjectCard.module.css";
import IconGitHub from "../../../lib/Icons/Icon_GitHub.svg";
import IconExternal from "../../../lib/Icons/Icon_External.svg";
import { ProjectCardTypes } from "../../../types";

export default function ProjectCard({
  headline,
  description,
  projectImage,
  gitLink,
  projectLink,
  employerLink,
  employer,
  ...props
}: ProjectCardTypes) {
  return (
    <div
      className={styles.card}
      {...props}
      data-aos="fade-up"
      data-aos-duration="6000"
    >
      <div className={styles["column-text"]}>
        <h3 className={styles.headline}>{headline}</h3>
        <p className={styles.copy}>{description}</p>
        <div className={styles["links-wrapper"]}>
          {gitLink && (
            <div className={styles.links}>
              <img src={IconGitHub} alt="Logo GitHub" />
              <a href={gitLink} className={`linkeffect ${styles.link}`}>
                Link to Github
              </a>
            </div>
          )}
          {projectLink && (
            <div className={styles.links}>
              <img src={IconExternal} alt="" />
              <a href={projectLink} className={`linkeffect ${styles.link}`}>
                Link to Project
              </a>
            </div>
          )}
          {employerLink && (
            <div className={styles.links}>
              <img src={IconExternal} alt="" />
              <a href={employerLink} className={`linkeffect ${styles.link}`}>
                Done at {employer}
              </a>
            </div>
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
