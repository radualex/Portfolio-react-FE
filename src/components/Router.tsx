import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./Router.scoped.scss";

import { Home } from "../pages/Home/Home";
import { Work } from "../pages/Work/Work";

export function Router() {
  return (
    <BrowserRouter>
      <div style={{ height: "100%" }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Works</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
