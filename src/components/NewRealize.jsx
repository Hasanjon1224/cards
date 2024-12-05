import React from "react";
import styles from "./NewRelease.module.css";

const NewRealize = () => {
  return (
    <div className={styles.newRelease}>
      <div className={styles.content}>
        <span className={styles.tag}>New Release</span>
        <h2>The Swan Isle (2035)</h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. I'm a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </div>
      <div className={styles.bookCover}>
        <img
          src=""
          alt=""
        />
        <div className={styles.newBadge}>New!</div>
      </div>
    </div>
  );
};

export default NewRealize;
