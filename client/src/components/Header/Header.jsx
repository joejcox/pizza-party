// import SignIn from "../SignIn/SignIn";
// import SignOut from "../SignOut/SignOut";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ContainerFlex from "../ContainerFlex/ContainerFlex";

const Header = () => {
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
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </ContainerFlex>
    </header>
  );
};

export default Header;
