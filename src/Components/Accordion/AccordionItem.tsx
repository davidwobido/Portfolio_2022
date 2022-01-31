import { useRef, useState } from "react";
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
  techstack,
}: JobTypes) {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.accordion}>
      <section className={styles.station}>
        <div
          style={clicked ? { color: "#1811fe" } : { color: "#1e2635" }}
          className={styles.header}
          onClick={() => setClicked(!clicked)}
        >
          <h5>
            {start} — {end}
          </h5>
          <div className={styles.job}>
            <h5>{company}:&nbsp;&nbsp;</h5>
            <h5 className={styles.position}> {position}</h5>
          </div>
          <span
            className={clicked ? styles.arrow_toggled : styles.arrow_untoggled}
          >
            ➞
          </span>
        </div>

        <div
          ref={contentEl}
          style={
            clicked && contentEl.current
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
          className={clicked ? styles.toggle : styles.untoggle}
        >
          <p>{tasks}</p>
          <p className={styles.additional}>{`Location: ${location}`}</p>
          <p className={styles.additional}>
            {clients ? `Clients: ${clients}` : `Tech Stack: ${techstack}`}
          </p>
        </div>
      </section>
    </div>
  );
}

export default AccordionItem;
