import SignIn from "../SignIn/SignIn";
import SignOut from "../SignOut/SignOut";
import styles from "./Header.module.css";

const Header = () => {
    
    return (
    <header className={styles.site_header}>
            <div className={styles.site_header__logo}>
                <a href="/">SITENAME</a>
            </div>
            <div className={styles.site_header__nav_container}>
                <div className={styles.site_header__nav}>
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                    <a href="/">Contact</a>
                </div>
                <div className={styles.site_header__user_auth}>
                    <SignIn />
                    <SignOut />
                </div>
            </div>
        </header>
    )
}

export default Header;