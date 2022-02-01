import styles from "./ClientBar.module.css";

function ClientBar({ urls }: any) {
  return (
    <>
      <h3>headline</h3>
      <div className={styles.bar}>
        {urls.map((icon: string, index: number) => (
          <img src={icon} key={index} />
        ))}
      </div>
    </>
  );
}

export default ClientBar;
