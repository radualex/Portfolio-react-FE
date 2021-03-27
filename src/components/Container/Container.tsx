import React from "react";
import "./Container.scoped.scss";

interface ContainerProps extends React.PropsWithChildren<{}> {
  classNames?: string;
}

export const Container = (props: ContainerProps) => {
  return (
    <div id="container" className={`${props.classNames}`}>
      {props.children}
    </div>
  );
};
