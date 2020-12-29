import React from "react";
import "./Home.scoped.scss";
import logo from "../../logo.svg";

import { PostCard } from "../../components/PostCard/PostCard";

export function Home() {
  return (
    <div id="container">
      <section id="home">
        <div id="left">
          <span id="title">Hi, I am John, Creative Technologist</span>
          <span id="caption">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
          <button>Download Resume</button>
        </div>
        <div id="right">
          <img src={logo} alt="my pic" />
        </div>
      </section>
      <section id="posts">
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
      </section>
    </div>
  );
}
