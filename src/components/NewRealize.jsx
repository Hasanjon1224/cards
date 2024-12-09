import React from "react";
import styles from "./NewRealize.module.css";

const NewRealize = () => {
  return (
    <div className="container">
   <div className={styles.newRelease}>
      <div className={styles.content}>
        <span className={styles.tag}>New Release</span>
        <h2>
          The Swan Isle <br /><span>(2035) </span>
        </h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. I'm a great place for you to
          tell a story and let your users know a little more about you.
        </p>

        <span className="fs-4">Order Now</span>
         <div className={styles.newBadge}>
          <a href="https://www.google.com" target="Google">Google</a>
          <a href="https://www.amazon.com" target="Amazon">Amazon</a>
          <a href="https://www.apple.com/apple-books" target="Ibooks">Ibooks</a>
        </div>
      </div>
       <div className={styles.bookCover}>
        <img
          src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png"
          alt="book cover"
        />
      </div>
    </div>
    </div>
    
  );
};

export default NewRealize;
