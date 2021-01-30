import styles from "./Basket.module.css";
import { useSelector } from "react-redux";
import { basketItems } from "store/slices/basket";
import BasketItem from "./BasketItem/BasketItem";
import { Link } from "react-router-dom";

const Basket = () => {
  const basket = useSelector(basketItems);

  const getCartQuantity = () => {
    let qty = 0;
    basket.forEach((item) => (qty += item.quantity));
    return qty;
  };

  const renderItems = () => {
    if (basket.length === 0)
      return (
        <div className={styles.cart_empty}>
          <h2>Your cart is empty, please add an item to check out</h2>
          <Link className={styles.cart_empty__btn} to="/">
            Back to the pizza party
          </Link>
        </div>
      );
    return basket.map((item) => {
      return <BasketItem item={item} />;
    });
  };

  return (
    <section className={styles.basket_items}>
      <div className={styles.basket_items__title_container}>
        <h1>
          Your Cart <small>({getCartQuantity()} items)</small>
        </h1>
      </div>
      <div className={basket.length !== 0 && styles.basket_items__container}>
        {renderItems()}
      </div>
    </section>
  );
};

export default Basket;
