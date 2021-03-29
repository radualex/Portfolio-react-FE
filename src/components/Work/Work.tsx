import React from "react";
import "./Work.scoped.scss";

import { Container } from "../Container/Container";
import { WorkItem } from "../WorkItem/WorkItem";

export const Work = () => {
  return (
    <Container classNames="gap-24" height="auto">
      <WorkItem />
      <WorkItem />
      <WorkItem />
    </Container>
  );
};
