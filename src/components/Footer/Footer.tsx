import React from "react";
import "./Footer.scoped.scss";
import Facebook from "../../assets/social/facebook-square-color.svg";
import Github from "../../assets/social/github.svg";
import Instagram from "../../assets/social/instagram.svg";
import LinkedIn from "../../assets/social/linkedin-square-color.svg";

import { Container } from "../Container/Container";
import { Icon } from "../Icon/Icon";

import { socialMedia } from "../../utils/static";

export const Footer = () => {
  return (
    <Container height="20vh">
      <div className="wrapper">
        <Icon image={Facebook} alt="facebook" url={socialMedia.facebook} />
        <Icon image={Github} alt="github" url={socialMedia.github} />
        <Icon image={Instagram} alt="instagram" url={socialMedia.instagram} />
        <Icon image={LinkedIn} alt="linkedIn" url={socialMedia.linkedIn} />
      </div>
    </Container>
  );
};
