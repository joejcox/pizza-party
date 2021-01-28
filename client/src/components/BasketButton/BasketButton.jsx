import { Link } from "react-router-dom";
import { IoMdPizza } from "react-icons/io";
import styles from "./BasketButton.module.css";

const BasketButton = () => (
  <div className={styles.basket_button}>
    <Link to="/shopping-basket">
      <IoMdPizza />
    </Link>
    <div className={styles.basket_item_count}>1</div>
  </div>
);

export default BasketButton;
