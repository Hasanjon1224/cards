import React from "react";
import "./AboutBookClubs.css";
const AboutBookClubs = () => {
  return (
    <div className="container">
      <div className="context">
        <img
          className="rounded-circle"
          src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-11967148791.jpg"
          alt=""
        />
        <h3 className="text-danger">About Kayla Griffith</h3>

        <p className="text-white text-center">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
        <button className="btn rounded-fill border text-danger px-5 py-2 text-center">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutBookClubs;
