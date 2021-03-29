import React from "react";
import "./Container.scoped.scss";

interface ContainerProps extends React.PropsWithChildren<{}> {
  classNames?: string;
  width?: string;
  height?: string;
}

export const Container = (props: ContainerProps) => {
  return (
    <div
      id="container"
      className={`${props.classNames}`}
      style={{ width: props.width, height: props.height }}
    >
      {props.children}
    </div>
  );
};
