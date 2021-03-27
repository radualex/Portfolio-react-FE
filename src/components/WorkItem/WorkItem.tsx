import React from "react";
import me from "../../assets/me.png";

import "./WorkItem.scoped.scss";

export const WorkItem = () => {
  return (
    <div id="container">
      <div id="wrapper">
        <img src={me} alt="project" />
        <div className="content">
          <h2 className="content__title">Hello!</h2>
          <div className="content__header">
            <span className="content__header__year">2021</span>
            <span className="content__header__project">Dashboard</span>
          </div>
          <p className="content__description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};
