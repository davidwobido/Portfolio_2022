import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Pages/Home/Home";
import Impressum from "./Pages/Impressum/Impressum";

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="legal" element={<Impressum />} />
      </Routes>
    </div>
  );
}

export default App;
