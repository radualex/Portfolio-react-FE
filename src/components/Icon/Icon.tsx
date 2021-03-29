import React from "react";

interface IconProps {
  image: string;
  alt: string;
  url: string;
}

export const Icon = (props: IconProps) => {
  return (
    <a href={props.url}>
      <img
        style={{ width: "30px", height: "30px" }}
        src={props.image}
        alt={props.alt}
      />
    </a>
  );
};
