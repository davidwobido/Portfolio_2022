import { useState } from "react";
import styles from "./Accordion.module.css";
import { JobTypes } from "../../../types";

function AccordionItem({
  start,
  end,
  company,
  position,
  location,
  tasks,
  clients,
}: JobTypes) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.accordion}>
      <section className={styles.station}>
        <div className={styles.period} onClick={() => setClicked(!clicked)}>
          <h3>
            {start} — {end}
          </h3>
          <h3>{company}</h3>
          <h3>{position}</h3>
        </div>
        {clicked ? (
          <div className={styles.toggle}>
            <p>{location}</p>
            <p>{tasks}</p>
            <p>{clients}</p>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default AccordionItem;
