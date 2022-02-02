import "./globals.css";
import styles from "./App.module.css";
import Accordion from "./Components/Accordion/Accordion";
import ContactBar from "./Components/ContactBar/ContactBar";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import IconBar from "./Components/IconBar/IconBar";
import DCSO from "../lib/Images/Portfolio_DCSO_1400x1400.jpg";
import Fehrenz from "../lib/Images/Portfolio_Fehrenz_1400x1400.jpg";
import FestivalFilter from "../lib/Images/Portfolio_FestivalFilter_1400x1400.jpg";
import Wearther from "../lib/Images/Portfolio_Wearther_1400x1400.jpg";
import LogoBZgA from "../lib/Icons/Clients/LogoBZgA.svg";
import LogoDCSO from "../lib/Icons/Clients/LogoDCSO.svg";
import LogoEWE from "../lib/Icons/Clients/LogoEWE.svg";
import LogoHagloefs from "../lib/Icons/Clients/LogoHagloefs.svg";
import LogoNB from "../lib/Icons/Clients/LogoNB.svg";
import LogoNike from "../lib/Icons/Clients/LogoNike.svg";
import HeaderImageLeft from "../lib/Images/Header_Image_left.svg";
import HeaderImageRight from "../lib/Images/Header_Image_right.svg";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
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
      </header>
      <aside className={styles["contact-bar"]}>
        <ContactBar />
      </aside>
      <main>
        <section className={styles.about}>
          <h4>David Wobido</h4>
          <h2>About</h2>
          <p className={styles["copy-intro"]}>
            After more than 10 years and several stations as a designer, I
            decided to continue as a frontend developer. I attended a coding
            bootcamp to build up a knowledge base, which I am now expanding with
            all my energy and motivation. With a flair for good design, the
            motivation to learn new things and the interest to develop relevant
            products together.
          </p>
          <IconBar
            className={styles["icon-bar"]}
            headline="Tech Stack"
            links={[
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
              LogoHagloefs,
            ]}
          />
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
        <hr className={styles["section-line"]} />
        <section className={styles.work}>
          <h4>Work</h4>
          <h2>Development Projects</h2>
          <ProjectCard
            headline="Festival Filter"
            description="Find your favourite festivals. Festival Filter calculates a rating for
the festivals that fit best based on selected genres. There’s an
overview to see all festivals from the database — including a search
function. The detail pages present information such as e.g. the entire
line-up, location or price.
"
            gitLink="https://github.com/davidwobido/festival-filter"
            projectLink="https://festival-filter.herokuapp.com/"
            projectImage={FestivalFilter}
          />
          <ProjectCard
            headline="Festival Filter"
            description="Find your favourite festivals. Festival Filter calculates a rating for
the festivals that fit best based on selected genres. There’s an
overview to see all festivals from the database — including a search
function. The detail pages present information such as e.g. the entire
line-up, location or price.
"
            gitLink="https://github.com/davidwobido/festival-filter"
            projectLink="https://festival-filter.herokuapp.com/"
            projectImage={Wearther}
          />
          <section>
            <h2 className={styles["headline-design"]}>Design Projects</h2>

            <ProjectCard
              headline="Festival Filter"
              description="Find your favourite festivals. Festival Filter calculates a rating for
the festivals that fit best based on selected genres. There’s an
overview to see all festivals from the database — including a search
function. The detail pages present information such as e.g. the entire
line-up, location or price.
"
              gitLink="https://github.com/davidwobido/festival-filter"
              projectLink="https://festival-filter.herokuapp.com/"
              projectImage={DCSO}
            />
            <ProjectCard
              headline="Festival Filter"
              description="Find your favourite festivals. Festival Filter calculates a rating for
the festivals that fit best based on selected genres. There’s an
overview to see all festivals from the database — including a search
function. The detail pages present information such as e.g. the entire
line-up, location or price.
"
              gitLink="https://github.com/davidwobido/festival-filter"
              projectLink="https://festival-filter.herokuapp.com/"
              projectImage={Fehrenz}
            />
          </section>
        </section>
        <hr className={styles["section-line"]} />

        <section className={styles.cv}>
          <h4>Stations</h4>
          <h2>Where I Worked</h2>
          <p className={styles["copy-intro"]}>
            I studied Communication Design in Mainz (2013–2017) and got a
            Bachelor of arts. Also I’m a trained media designer. After more than
            10 years and several stations as a designer, I decided to continue
            as a frontend developer. I attended a coding bootcamp to build up a
            knowledge base, which I am now expanding with all my energy and
            motivation.
          </p>
          <Accordion className={styles.accordion} />
        </section>
      </main>
      <footer>
        <p>David Wobido</p>
        <a>Legal</a>
      </footer>
    </div>
  );
}

export default App;
