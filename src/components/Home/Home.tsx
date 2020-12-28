import React from "react";
import "./Home.scoped.scss";
import logo from "../../logo.svg";

export function Home() {
  return (
    <div className="container">
      <div className="left">
        <span id="title">Hi, I am John, Creative Technologist</span>
        <span id="caption">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </span>
        <button>Download Resume</button>
      </div>
      <div className="right">
        <img src={logo} alt="my pic" />
      </div>
    </div>
  );
}
