import styles from "./SideTabs.module.css";
import { useState } from "react";

const SideTabs = () => {
  const [prev, setPrev] = useState(null);
  const removeElement = (e) => {
    const dataset = e.target.dataset.target;
    const target = document.querySelector(`[data-tabname=${dataset}]`);

    // store target to remove its block later
    if (prev) {
      prev.style.display = "none";
    }
    setPrev(target);
    target.style.display = "inline-block";
  };

  return (
    <>
      <h2>Side Tabs</h2>
      <div className={styles.child} data-tabname="one">
        One
      </div>
      <div className={styles.child} data-tabname="two">
        Two
      </div>
      <button onClick={(e) => removeElement(e)} data-target="one">
        Show One
      </button>
      <button onClick={(e) => removeElement(e)} data-target="two">
        Show Two
      </button>
    </>
  );
};

export default SideTabs;
