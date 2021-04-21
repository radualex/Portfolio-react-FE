import React from "react";

import "./WorkItem.scoped.scss";

// TODO: define this as a type and reuse in Work.tsx
interface Props extends React.HTMLProps<HTMLElement> {
  title: string;
  year: number;
  name: string;
  description: string;
  picture?: string;
}

export const WorkItem: React.FunctionComponent<Props> = ({
  title,
  year,
  name,
  description,
  picture,
}) => {
  return (
    <div id="container">
      <div id="wrapper">
        <img src={picture} alt="project" />
        <div className="content">
          <h2 className="content__title">{title}</h2>
          <div className="content__header">
            <span className="content__header__year">{year}</span>
            <span className="content__header__project">{name}</span>
          </div>
          <p className="content__description">{description}</p>
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};
