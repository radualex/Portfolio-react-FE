import React from "react";
import "./Container.scoped.scss";

export const Container = (props: React.PropsWithChildren<{}>) => {
  return <div id="container">{props.children}</div>;
};
