import React from "react";
import "./Home.scoped.scss";

import { Landing } from "../../components/Landing/Landing";
import { Work } from "../../components/Work/Work";

export const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      {/* <Work /> */}
    </React.Fragment>
  );
};
