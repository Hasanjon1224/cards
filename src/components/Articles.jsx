import React from "react";
import "./Articles.css";
const Articles = () => {
  return (
    <div className="container">
      <div className="articles_wrapper bg-transparent">
        <h3 className="text-danger text-center py-5">Praise & Reviews</h3>
        <div className="d-flex gap-3 align-items-center justify-content-between py-5">
          <div className="text">
            <h4 className="fs-1 text-danger">"</h4>
            <p className="text-white text-center align-items-center">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <span className="text-danger fs-5 pt-5">
              ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
            </span>
            <hr className="line text-white" />
          </div>
          <div className="text">
            <h4 className="fs-1 text-danger">"</h4>
            <p className="text-white text-center align-items-center">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <span className="text-danger fs-5">
              ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
            </span>
            <hr className="line text-white" />
          </div>
          <div className="text">
            <h4 className="fs-1 text-danger">"</h4>
            <p className="text-white text-center align-items-center">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <span className="text-danger fs-5">
              ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
            </span>
            <hr className="line text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
