import React from "react";
import "./Landing.scoped.scss";
import me from "../../assets/me.png";

import { Container } from "../Container/Container";

export const Landing = () => {
  return (
    <Container>
      <div id="landing">
        <div id="landing__left">
          <span id="landing__left__title">Hi there! This is Radu here.</span>
          <span id="landing__left__caption">
            I am a software engineer located in Amsterdam specialized in
            developing high quality websites and applications. Currently working
            for ING Bank as a Software Engineer.
          </span>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <span>See my resume</span>
          </a>
        </div>
        <div id="landing__right">
          <div id="landing__right__img">
            <img className="imgStyle" src={me} alt="this is Radu" />
            <div className="imgStyle" id="landing__right__img__back">
              <span>See my work!</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
