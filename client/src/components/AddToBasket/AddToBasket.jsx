import { useState } from "react";
import styles from "./AddToBasket.module.css";

const AddToBasket = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return false;
    setCount(count - 1);
  };

  return (
    <footer className={styles.add_to_basket}>
      <div className={styles.quantity_buttons}>
        <button className={styles.quantity_button} onClick={() => decrement()}>
          -
        </button>

        <span className={styles.quantity}>{count}</span>
        <button className={styles.quantity_button} onClick={() => increment()}>
          +
        </button>
      </div>

      <button className={styles.add_to_basket__button}>Add to basket</button>
    </footer>
  );
};

export default AddToBasket;
