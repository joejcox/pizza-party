import BasketItemTotal from "components/Basket/BasketItemTotal/BasketItemTotal";
import RemoveItem from "./RemoveItem/RemoveItem";
import styles from "./BasketItem.module.css";

const BasketItem = ({ item }) => {
  if (!item) {
    console.log("Error in BasketItem component");
    console.error('Prop "item" does not exist in BasketItem component');
    return false;
  }

  return (
    <article key={item.name} className={styles.basket_item}>
      <img
        src={item.media.source}
        alt={item.name}
        className={styles.basket_item__image}
      />
      <div className={styles.basket_item__details}>
        <h2 className={styles.basket_item__title}>{item.name}</h2>
        <p className={styles.basket_item__price}>
          {item.quantity} x {item.price.formatted_with_symbol}
        </p>
        <RemoveItem item={item} />
      </div>
      <BasketItemTotal item={item} />
    </article>
  );
};

export default BasketItem;
