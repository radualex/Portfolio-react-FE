import React from "react";
import "./Home.scoped.scss";
import me from "../../assets/me.png";
import Pdf from "../../assets/resume.pdf";

// import { PostCard } from "../../components/PostCard/PostCard";

export function Home() {
  return (
    <div id="container">
      <section id="container__home">
        <div id="container__home__left">
          <span id="container__home__left__title">
            Hi there! This is Radu here.
          </span>
          <span id="container__home__left__caption">
            I am a software engineer located in Amsterdam specialized in
            developing high quality websites and applications. Currently working
            for ING Bank as a Software Engineer.
          </span>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <span>Download Resume</span>
          </a>
        </div>
        <div id="container__home__right">
          <div id="container__home__right__img">
            <img className="imgStyle" src={me} alt="this is Radu" />
            <div className="imgStyle" id="container__home__right__img__back">
              <span>See my work!</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="posts">
        <div id="posts-container">
          <div id="posts-title">
            <span id="posts-recent">Recent posts</span>
            <span id="posts-view-all">View all</span>
          </div>
          <div id="posts-cards">
            <PostCard />
            <PostCard />
          </div>
        </div>
      </section> */}
    </div>
  );
}
