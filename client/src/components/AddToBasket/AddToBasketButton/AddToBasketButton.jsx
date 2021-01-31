import { IoBagCheck, IoBag } from "react-icons/io5";

import styles from "./AddToBasketButton.module.css";

const AddToBasketButton = ({ added, addItem }) => {
  return (
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
  );
};

export default AddToBasketButton;
