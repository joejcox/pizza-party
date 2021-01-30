import styles from "./BasketItem.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { removeFromBasket } from "store/slices/basket";
import { useDispatch } from "react-redux";

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article key={item.name} className={styles.basket_item}>
      <img
        src={item.image}
        alt={item.name}
        className={styles.basket_item__image}
      />
      <div className={styles.basket_item__details}>
        <h2 className={styles.basket_item__title}>{item.name}</h2>
        <p className={styles.basket_item__price}>{item.price}</p>
        <span className={styles.basket_item__quantity}>
          {item.quantity} item(s) in basket
        </span>
      </div>
      <div className={styles.basket_item__delete}>
        <button
          className={styles.basket_item__delete_btn}
          onClick={() => dispatch(removeFromBasket(item.name))}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </article>
  );
};

export default BasketItem;
