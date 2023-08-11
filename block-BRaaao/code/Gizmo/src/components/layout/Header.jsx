import { useState } from "react";
import { Globe, Hamburger } from "../../assets/icons";
import Hero from "../ui/Hero";
import styles from "./layout.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <a href="#" className={styles.globe}>
          <Globe />
        </a>
        <button
          className={styles.hamburger}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Hamburger />
        </button>
        <ul className={`${showMenu ? styles.show : ""} ${styles["menu-list"]}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
