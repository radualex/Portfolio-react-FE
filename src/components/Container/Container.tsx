import React from "react";
import "./Container.scoped.scss";

interface ContainerProps extends React.PropsWithChildren<{}> {
  classNames?: string;
  width?: string;
  height?: string;
  backgroundImage?: string;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  classNames,
  width,
  height,
  backgroundImage,
  children,
  ...props
}) => {
  return (
    <div
      id="container"
      className={`${classNames}`}
      style={{ width: width, height: height, backgroundImage: backgroundImage }}
    >
      {children}
    </div>
  );
};
