import styles from "./Basket.module.css";
import BasketItem from "./BasketItem/BasketItem";
// import { checkOut } from "store/slices/basket";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import commerce from "utils/lib/commerce";
import { Link } from "react-router-dom";

const Basket = () => {
  // const dispatch = useDispatch();
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    commerce.cart.retrieve().then((cart) => setBasket(cart));
    setLoading(false);
  }, []);

  const BasketItems = () => {
    if (loading) return <p>Loading items...</p>;
    if (!loading && basket.length === 0)
      return (
        <div className={styles.cart_empty}>
          <h2>Your basket is empty, please add an item to check out</h2>
          <Link className={styles.cart_empty__btn} to="/">
            Back to the pizza party
          </Link>
        </div>
      );
    return basket.line_items.map((item) => (
      <BasketItem key={item.id} item={item} />
    ));
  };

  const checkout = basket.length !== 0 && (
    <div className={styles.basket_items__checkout}>
      <Link to="/checkout">Continue to Checkout</Link>
    </div>
  );

  const total = basket.length !== 0 && (
    <div className={styles.basket_items__total_price}>
      <span>Total:</span>
      <p>{basket.subtotal.formatted_with_symbol}</p>
    </div>
  );

  return (
    <section className={styles.basket_items}>
      <div className={styles.basket_items__title_container}>
        <h1 className={styles.basket_items__title}>
          Your Basket <small>({basket.total_items})</small>
        </h1>
        {total}
      </div>
      <div
        className={basket.length !== 0 ? styles.basket_items__container : ""}
      >
        <BasketItems />
      </div>
      {checkout}
    </section>
  );
};

export default Basket;
