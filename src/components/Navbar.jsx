import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className={styles.navbar}>
        <div className={styles.logo}>K. Griffith</div>
        <ul className={styles.navItems}>
          <li>
            <a href="#appearances">APPEARANCES</a>
          </li>
          <li>
            <a href="#books">BOOKS</a>
          </li>
          <li>
            <a href="#news">NEWS</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <i class="bi bi-text-right"></i>
      </nav>
      <hr className="line text-white" />
    </div>
  );
};

export default Navbar;
