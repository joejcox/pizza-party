import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ContainerFlex from "../ContainerFlex/ContainerFlex";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";
import { basketItems } from "store/slices/basket";
import { getQuantity } from "utils/basketUtils";

const Header = () => {
  const basket = useSelector(basketItems);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current && ref.current.getBoundingClientRect().top <= 88) {
      setSticky(null);
    }
    if (ref.current && ref.current.getBoundingClientRect().bottom >= 88)
      return false;
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().bottom <= 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header
      className={`${isSticky ? styles.sticky : ""} ${styles.site_header}`}
      ref={ref}
      id="video_banner"
    >
      <ContainerFlex>
        <div className={styles.site_header__logo}>
          <Link to="/">PIZZA PARTY</Link>
        </div>
        <div className={styles.site_header__nav_container}>
          <div className={styles.site_header__nav}>
            <Link to="/">Home</Link>
            <Link to="/pizzas">Pizzas</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className={styles.site_header__basket}>
            <Link
              to="/shopping-basket"
              className={styles.site_header__basket_link}
            >
              <IoBag />
              <span className={styles.site_header__basket_quantity}>
                {getQuantity(basket)}
              </span>
            </Link>
          </div>
        </div>
      </ContainerFlex>
    </header>
  );
};

export default Header;
