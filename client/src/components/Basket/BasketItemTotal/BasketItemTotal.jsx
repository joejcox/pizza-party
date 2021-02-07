import QuantityButtons from "components/AddToBasket/QuantityButtons/QuantityButtons";
import styles from "./BasketItemTotal.module.css";
import commerce from "utils/lib/commerce";

const BasketItemTotal = ({ item }) => {
  const increment = () => {
    commerce.cart.update(item.id, { quantity: item.quantity + 1 });
  };
  const decrement = () => {
    commerce.cart.update(item.id, { quantity: item.quantity - 1 });
  };

  console.log(item);

  return (
    <div className={styles.basket_item__total}>
      <div className={styles.price_container}>
        <p className={styles.price}>{item.line_total.formatted_with_symbol}</p>
      </div>
      <QuantityButtons
        increment={increment}
        decrement={decrement}
        count={item.quantity}
      />
    </div>
  );
};

export default BasketItemTotal;
