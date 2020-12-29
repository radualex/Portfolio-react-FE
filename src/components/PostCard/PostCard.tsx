import React from "react";
import "./PostCard.scoped.scss";

export function PostCard() {
  return (
    <div id="container">
      <span id="title">Making a design system from scratch</span>
      <div id="labels">
        <span id="date">12 Feb 2020</span>
        <hr />
        <span id="skills">Design, Pattern</span>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}
