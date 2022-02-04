import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.css";
import Accordion from "../../Components/Accordion/Accordion";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ContactBar from "../../Components/ContactBar/ContactBar";
import AboutSection from "../../Components/About/AboutSection";
import Header from "../../Components/Header/Header";
import DCSO from "../../../lib/Images/Portfolio_DCSO_1400x1400.jpg";
import Fehrenz from "../../../lib/Images/Portfolio_Fehrenz_1400x1400.jpg";
import FestivalFilter from "../../../lib/Images/Portfolio_FestivalFilter_1400x1400.jpg";
import Wearther from "../../../lib/Images/Portfolio_Wearther_1400x1400.jpg";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <div className="contact-bar">
          <ContactBar />
        </div>
        <AboutSection className={styles.about} />

        <div className="line-wrapper">
          <hr data-aos="fade-right" className="section-line" />
        </div>
        <section>
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
            headline="Wearther"
            description="A Weather-App that suggests what to wear and if an umbrella is necessary. Uses two APIs for your location and the weather information. Also you can search for another city.
"
            gitLink="https://github.com/davidwobido/Weather-App"
            projectImage={Wearther}
          />
          <a
            className={`linkeffect ${styles["link-large"]}`}
            href="https://github.com/davidwobido/"
          >
            Find more projects on GitHub
          </a>
          <h2 className={styles["headline-design"]}>Design Projects</h2>

          <ProjectCard
            headline="DCSO"
            description="As cybercrime grows, so does the demand for security. The DCSO offers a community in which experts from various companies, authorities and institutions exchange information in order to derive an efficient defense. Visually, this idea is represented by the Dome, which is formed by the squares coming together – the community.
Done at Helder"
            employer="Helder"
            employerLink="https://helder.design/"
            projectLink="https://www.dcso.de/"
            projectImage={DCSO}
          />
          <ProjectCard
            headline="Dres. Fehrenz"
            description="The dental practice Dres. Fehrenz received a complete
              new treatment from the root to the polish. The result is a clean, recognizable corporate design including website, social media templates, office and interior design.
"
            projectLink="https://www.dr-fehrenz.de/"
            projectImage={Fehrenz}
          />
          <a
            className={`linkeffect ${styles["link-large"]}`}
            href="mailto:me@davidwobido.de"
          >
            Contact me for more projects
          </a>
        </section>
        <div className="line-wrapper">
          <hr data-aos="fade-right" className="section-line" />
        </div>
        <section className={styles.cv}>
          <h4>Stations</h4>
          <h2>Where I Worked</h2>
          <p className="copy-intro">
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
        <p>© David Wobido</p>
        <Link to="/legal">
          Legal Notice/
          <br />
          Impressum/
          <br />
          DSGVO
        </Link>
      </footer>
    </div>
  );
}

export default Home;
