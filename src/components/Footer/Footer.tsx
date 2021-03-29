import React from "react";
import "./Footer.scoped.scss";
import Facebook from "../../assets/social/facebook-square-color.svg";
import Github from "../../assets/social/github.svg";
import Instagram from "../../assets/social/instagram.svg";
import LinkedIn from "../../assets/social/linkedin-square-color.svg";

import { Container } from "../Container/Container";
import { Icon } from "../Icon/Icon";

export const Footer = () => {
  return (
    <Container height="20vh">
      <div className="wrapper">
        <Icon image={Facebook} alt="facebook" url="#" />
        <Icon image={Github} alt="github" url="#" />
        <Icon image={Instagram} alt="instagram" url="#" />
        <Icon image={LinkedIn} alt="linkedIn" url="#" />
      </div>
    </Container>
  );
};
