import React from "react";
import "./Work.scoped.scss";

import { Container } from "../Container/Container";
import { WorkItem } from "../WorkItem/WorkItem";

const data = [
  {
    title: "Title 1",
    year: 2000,
    project: "Project 1",
    description: "Description 1",
  },
  {
    title: "Title 2",
    year: 2000,
    project: "Project 2",
    description: "Description 2",
  },
  {
    title: "Title 3",
    year: 2000,
    project: "Project 3",
    description: "Description 3",
  },
];

export const Work = () => {
  return (
    <Container classNames="gap-24" height="auto">
      {data.map((item, index) => (
        <WorkItem
          key={`WorkItem-${index}`}
          title={item.title}
          year={item.year}
          project={item.project}
          description={item.description}
        />
      ))}
    </Container>
  );
};
