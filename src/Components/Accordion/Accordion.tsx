import { Jobs } from "../../../lib/Data/data";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  return (
    <>
      {Jobs.map((item, index) => (
        <AccordionItem
          key={index}
          start={item.start}
          end={item.end}
          company={item.company}
          position={item.position}
          location={item.location}
          tasks={item.tasks}
          clients={item.clients}
        />
      ))}
    </>
  );
}
