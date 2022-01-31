import React from "react";
import styles from "./Accordion.module.css";
import { Jobs } from "../../../lib/Data/data";
import { JobTypes } from "../../../types";

export default function Accordion() {
  return (
    <>
      {Jobs.map((item: JobTypes, index) => (
        <div className={styles.accordion} key={index}>
          <section className={styles.station}>
            <div className={styles.period}>
              <h3>
                {item.start}—{item.end}
              </h3>
              <h3>{item.company}</h3>
              <h3>{item.position}</h3>
            </div>
            <div className={styles.toggle}>
              <p>{item.jobs}</p>
              <p>{item.clients}</p>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
