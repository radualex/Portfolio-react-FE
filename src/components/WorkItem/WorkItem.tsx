import React from "react";
// import me from "../../assets/me.png";

import "./WorkItem.scoped.scss";

interface Props extends React.HTMLProps<HTMLElement> {
  title: string;
  year: number;
  project: string;
  description: string;
  picture?: string;
}

export const WorkItem: React.FunctionComponent<Props> = ({
  title,
  year,
  project,
  description,
  picture,
  ...props
}) => {
  return (
    <div id="container">
      <div id="wrapper">
        <img src={picture} alt="project" />
        <div className="content">
          <h2 className="content__title">{title}</h2>
          <div className="content__header">
            <span className="content__header__year">{year}</span>
            <span className="content__header__project">{project}</span>
          </div>
          <p className="content__description">{description}</p>
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};
