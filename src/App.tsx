import "./globals.css";
import styles from "./App.module.css";
import Accordion from "./Components/Accordion/Accordion";
import ContactBar from "./Components/ContactBar/ContactBar";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import IconBar from "./Components/IconBar/IconBar";
import LogoFestivalFilter from "../lib/Logos/FF_Logo_small.svg";
import ProjectImageFF from "../lib/Images/FF_Example_Screenshot.png";
import LogoBZgA from "../lib/Icons/Clients/LogoBZgA.svg";
import LogoDCSO from "../lib/Icons/Clients/LogoDCSO.svg";
import LogoEWE from "../lib/Icons/Clients/LogoEWE.svg";
import LogoHagloefs from "../lib/Icons/Clients/LogoHagloefs.svg";
import LogoNB from "../lib/Icons/Clients/LogoNB.svg";
import LogoNike from "../lib/Icons/Clients/LogoNike.svg";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <h4 className={styles["preline-title"]}>Development x Design</h4>
        <h1 className={styles.title}>Ready for new challenges </h1>
        <span className={styles.intro}>
          With a flair for good design, the motivation to learn new things and
          the interest to develop relevant products together.
        </span>
      </header>
      <aside className={styles["contact-bar"]}>
        <ContactBar />
      </aside>
      <main>
        <section className={styles.technologies}>
          <IconBar
            headline="Tech Stack"
            links={[
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
            ]}
          />{" "}
        </section>
        <section className={styles.work}>
          <h4>Work</h4>
          <h2>Development Projects</h2>
          <ProjectCard
            logo={LogoFestivalFilter}
            headline="Festival Filter"
            description="Find your favourite festivals. Festival Filter calculates a rating for
the festivals that fit best based on selected genres. There’s an
overview to see all festivals from the database — including a search
function. The detail pages present information such as e.g. the entire
line-up, location or price.
"
            gitLink="https://github.com/davidwobido/festival-filter"
            projectLink="https://festival-filter.herokuapp.com/"
            projectImage={ProjectImageFF}
          />
        </section>

        <section className={styles.cv}>
          <h4>Stations</h4>
          <h2>Where I Worked</h2>
          <p>
            I studied Communication Design in Mainz (2013–2017) and got a
            Bachelor of arts. Also I’m a trained media designer. <br />
            After more than ten years and several stations as a designer, I
            decided to continue as a frontend developer. I attended a coding
            bootcamp to build up a knowledge base, which I am now expanding with
            all my energy and motivation.
          </p>
          <Accordion />
          <IconBar
            headline="Clients"
            links={[
              LogoNB,
              LogoNike,
              LogoHagloefs,
              LogoEWE,
              LogoBZgA,
              LogoDCSO,
            ]}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
