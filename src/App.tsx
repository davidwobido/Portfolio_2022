import "./globals.css";
import styles from "./App.module.css";
import Accordion from "./Components/Accordion/Accordion";
import ContactBar from "./Components/ContactBar/ContactBar";
import ProjectCard from "./Components/ProjectCard/ProjectCard";
import LogoFestivalFilter from "../lib/Logos/FF_Logo_small.svg";
import ProjectImageFF from "../lib/Images/FF_Example_Screenshot.png";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <h4 className={styles["preline-title"]}>Development x Design</h4>
        <h1 className={styles.title}>Hi, I’m David!</h1>
        <p className={styles.intro}>
          Ready for new challenges to shape digitalization as a Frontend
          Developer. With a flair for good design, the motivation to learn new
          things and the interest to develop relevant products together.
        </p>
      </header>
      <main>
        <section className={styles.about}>
          <h4>About</h4>
          <h2>Who am I</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nunc
            sed pellentesque lectus lacinia. Etiam vel integer placerat
            phasellus non congue tempor. Fames scelerisque ornare a dui nunc
            morbi bibendum ipsum, proin. Posuere diam, morbi elementum auctor
            diam interdum mus.
          </p>
          <ContactBar />
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
        <section className={styles.frame}>
          <h2>Frame. Need better headline</h2>
          <div className={styles.clients}>
            <h3>clients</h3>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className={styles.technologies}>
            <h3>technologies</h3>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </section>
        <section className={styles.cv}>
          <h4>Stations</h4>
          <h2>Where I Worked</h2>
          <p>
            I studied Communication Design in Mainz (2013–2017) and got a
            Bachelor of arts. Also I’m a trained media designer.
          </p>
          <Accordion />
        </section>
      </main>
    </div>
  );
}

export default App;
