import QuantityButtons from "components/AddToBasket/QuantityButtons/QuantityButtons";
import styles from "./BasketItemTotal.module.css";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "store/slices/basket";

const RemoveFromBasketButton = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const price = (item.price * quantity).toFixed(2);

  const increment = () => {
    dispatch(increaseQuantity(item.name));
  };
  const decrement = () => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className={styles.basket_item__total}>
      <div className={styles.price_container}>
        <p className={styles.price}>£{price}</p>
        {/* <span className={styles.quantity}>
          {quantity} x £{item.price}
        </span> */}
      </div>
      <QuantityButtons
        increment={increment}
        decrement={decrement}
        count={quantity}
      />
    </div>
  );
};

export default RemoveFromBasketButton;
