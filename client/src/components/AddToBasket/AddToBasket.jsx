import QuantityButtons from "./QuantityButtons/QuantityButtons";
import AddToBasketButton from "./AddToBasketButton/AddToBasketButton";
import { useState } from "react";
import { addToBasket } from "store/slices/basket";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import styles from "./AddToBasket.module.css";

const AddToBasket = ({ pizza }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return false;
    setCount(count - 1);
  };

  const addItem = () => {
    if (!pizza) return false;
    const { name, image, price } = pizza;

    dispatch(
      addToBasket({
        name: name,
        image: image,
        price: price,
        quantity: count,
      })
    );
    toast(() => (
      <div className={styles.toast}>
        <img src={image} alt={name} width="50" height="50" />
        <div className={styles.toast_details}>
          <Link to="/shopping-basket">
            <strong>
              {count} x {name} £{(count * price).toFixed(2)}
            </strong>
          </Link>
          <i>Successfuly added to basket</i>
        </div>
      </div>
    ));
    setCount(1);
  };

  return (
    <footer className={styles.add_to_basket}>
      <QuantityButtons
        increment={increment}
        decrement={decrement}
        count={count}
      />
      <AddToBasketButton addItem={addItem} />
    </footer>
  );
};

export default AddToBasket;
