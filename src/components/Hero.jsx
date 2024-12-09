import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <img className="sm img-responsive" 
        src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-11967148821.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <h1>Kayla Griffith</h1>
        <p>Award Winning Author</p>
      </div>
    </div>
  );
};

export default Hero;
