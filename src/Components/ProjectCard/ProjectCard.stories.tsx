import ProjectCard from "./ProjectCard";
import ProjectImageFF from "../../../lib/Images/FF_Example_Screenshot.png";

export default {
  component: ProjectCard,
  title: "Components/ProjectCard",
};

export const Default = () => (
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
    projectImage={ProjectImageFF}
  />
);
