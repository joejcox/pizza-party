import QuantityButtons from "./QuantityButtons/QuantityButtons";
import AddToBasketButton from "./AddToBasketButton/AddToBasketButton";

import { useState } from "react";
import { addToBasket } from "store/slices/basket";
import { useDispatch } from "react-redux";

import styles from "./AddToBasket.module.css";

const AddToBasket = ({ pizza }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 1) return false;
    setCount(count - 1);
  };

  const runBasketAnimation = () => {
    const bsktBtn = document.getElementById("basket_button");

    bsktBtn.style.transform = "scale(1.5)";
    setTimeout(function () {
      bsktBtn.style.transform = "scale(1)";
    }, 200);
  };

  const addItem = () => {
    if (!pizza) return false;

    dispatch(
      addToBasket({
        name: pizza.name,
        image: pizza.image,
        price: pizza.price,
        quantity: count,
      })
    );

    setCount(1);
    setAdded(true);
    runBasketAnimation();
  };

  return (
    <footer className={styles.add_to_basket}>
      <QuantityButtons
        increment={increment}
        decrement={decrement}
        count={count}
      />
      <AddToBasketButton addItem={addItem} added={added} />
    </footer>
  );
};

export default AddToBasket;
