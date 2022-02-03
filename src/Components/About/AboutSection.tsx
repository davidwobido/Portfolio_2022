import styles from "./AboutSection.module.css";
import IconBar from "../IconBar/IconBar";
import LogoBZgA from "../../../lib/Icons/Clients/LogoBZgA.svg";
import LogoDCSO from "../../../lib/Icons/Clients/LogoDCSO.svg";
import LogoEWE from "../../../lib/Icons/Clients/LogoEWE.svg";
import LogoHagloefs from "../../../lib/Icons/Clients/LogoHagloefs.svg";
import LogoNB from "../../../lib/Icons/Clients/LogoNB.svg";
import LogoNike from "../../../lib/Icons/Clients/LogoNike.svg";

function tag(content: string) {
  return <span className={styles.tag}>{content}</span>;
}

const list = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Storybook",
  "Lottie Files",
  "Figma",
  "Sketch",
  "Adobe XD",
  "Adobe Photoshop",
  "Adobe After Effects",
  "Adobe Illustrator",
  "Adobe InDesign",
];

function AboutSection({ ...props }) {
  return (
    <div {...props}>
      <h4>David Wobido</h4>
      <h2>About</h2>
      <p className="copy-intro">
        After more than 10 years and several stations as a designer, I decided
        to continue as a frontend developer. I attended a coding bootcamp to
        build up a knowledge base, which I am now expanding with all my energy
        and motivation. With a flair for good design, the motivation to learn
        new things and the interest to develop relevant products together.
      </p>
      <h3>TechStack</h3>
      <div className={styles.tags}>{list.map((e) => tag(`${e}`))}</div>
      <IconBar
        headline="Clients"
        links={[LogoNB, LogoNike, LogoHagloefs, LogoEWE, LogoBZgA, LogoDCSO]}
      />
    </div>
  );
}
export default AboutSection;
