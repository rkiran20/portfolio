import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterWrapper>
      <Conditions>
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </Conditions>
      <IconsWrapper>
        <a
          href="https://github.com/rkiran20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/vavilapalli-ravi-kiran-79aa69231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon={faLinkedin} />
        </a>
        <a
          href="https://x.com/ravi23_tweets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons icon={faTwitter} />
        </a>
      </IconsWrapper>
      <p>&copy; 2024 RaviKiran. All rights reserved</p>
    </FooterWrapper>
  );
};

const IconsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const Icons = styled(FontAwesomeIcon)`
  color: #a3a0a0;
  height: 2rem;
  @media (max-width: 493px) {
    height: 1.5rem;
  }
`;

const Conditions = styled.div`
  color: #a3a0a0;
  display: flex;
  gap: 1rem;
`;
const FooterWrapper = styled.section`
  border: 2px solid black;
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  white-space: normal;
  @media (max-width: 493px) {
    gap: 0.5rem;
  }
  p {
    padding: 2rem 0rem;
    @media (max-width: 798px) {
      padding: 1rem 0rem;
    }
    @media (max-width: 493px) {
      font-size: 0.8rem;
    }
  }
`;

export default Footer;
