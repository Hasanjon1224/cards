import React from "react";
import "./about_Author.css";
const AboutAuthor = () => {
  return (
    <div className="container">
      <div className="content align-items-center">
        <h1 className="fs-1 text-danger text-center py-5">
          See Upcoming Appearances
        </h1>
        <p
          className="text-center text-white py-3"
          style={{ height: "48px", textAlign: "center" }}
        >
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy.
        </p>
        <div
          className="box"
          style={{ width: "100%", height: "192px", border: "1px solid white" }}
        >
          <span className="new text-white" style={{ width: "400px" }}>
            January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan
            Isle, 7PM - 8PM EST
          </span>
          <button className="btn rounded-pill" style={{ border: "1px solid" }}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
