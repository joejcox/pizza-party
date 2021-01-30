import { useState } from "react";
import styles from "./AddToBasket.module.css";
import { addToBasket } from "store/slices/basket";
import { useDispatch } from "react-redux";
import { IoBagCheck, IoBag } from "react-icons/io5";
import BasketItem from "components/Basket/BasketItem/BasketItem";

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

  const itemAddedToBasketIndicator = (item) => {
    item.quantity = count;
    console.log(item);
    <div className={styles.item_added}>
      <BasketItem item={item} />
    </div>;
  };

  const addItem = () => {
    const bsktBtn = document.getElementById("basket_button");

    bsktBtn.style.transform = "scale(1.5)";
    setTimeout(function () {
      bsktBtn.style.transform = "scale(1)";
    }, 200);
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
    itemAddedToBasketIndicator(pizza);
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
      <button
        className={`${styles.add_to_basket__button} ${
          added && styles.add_to_basket__button_added
        }`}
        onClick={() => addItem()}
      >
        {added ? (
          <>
            <span>Added to cart</span>
            <IoBagCheck />
          </>
        ) : (
          <>
            <span>Add to cart</span>
            <IoBag />
          </>
        )}
      </button>
    </footer>
  );
};

export default AddToBasket;
