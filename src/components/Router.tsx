import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./Router.scoped.scss";

import { Home } from "../pages/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span className="material-icons">home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span className="material-icons">contact_page</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
