import AddToBasket from "../AddToBasket/AddToBasket";
import styles from "./PizzaPreview.module.css";
// import { useSelector } from "react-redux";
// import { basketItems } from "store/slices/basket";

const PizzaPreview = ({ children, image, title, price }) => {
  // const basket = useSelector(basketItems);

  return (
    <article className={styles.pizza_preview}>
      <div className={`${styles.pizza_preview__inner} uk-card uk-card-body`}>
        <header className="uk-flex">
          <div className={styles.pizza_image_container}>
            <img
              src={image}
              className={styles.pizza_image}
              alt="Pizza"
              margin="0 auto"
            ></img>
          </div>
          <div className={styles.pizza_details}>
            <h3 className={styles.pizza_title}>{title}</h3>
            <p className={styles.pizza_ingredients}>{children}</p>
            <hr className="uk-divider-icon" />
            <div className={styles.pizza_price}>£{price}</div>
          </div>
        </header>

        <AddToBasket pizza={{ name: title, image: image, price: price }} />
      </div>
    </article>
  );
};

export default PizzaPreview;
