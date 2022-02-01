import styles from "./IconBar.module.css";

function IconBar({ urls, headline }: any) {
  return (
    <div className={styles.wrapper}>
      <h3>{headline}</h3>
      <div className={styles.bar}>
        {urls.map((icon: string, index: number) => (
          <img src={icon} key={index} />
        ))}
      </div>
    </div>
  );
}

export default IconBar;
