import React, { useState } from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home3 from "../img/images.jpeg";
import styled from "styled-components";
import { scrollReveal, scrollRevealLeft } from "../animation";
import useScroll from "./useScroll";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );
  const animationVariant = isMobile ? scrollRevealLeft : scrollReveal;
  return (
    <Services
      variants={animationVariant}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Image>
        <img src={home3} alt="logo" />
      </Image>
      <SerContent>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon"></img>
              <h3>Efficient</h3>
            </div>
            <p>Delivering quality work on time with optimized processes.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon"></img>
              <h3>Teamwork</h3>
            </div>
            <p>Collaborating effectively to achieve shared goals.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="icon"></img>
              <h3>Flexible</h3>
            </div>
            <p>I'm very flexible with time zone communications.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon"></img>
              <h3>Affordable</h3>
            </div>
            <p>Offering high-quality solutions within budget.</p>
          </Card>
        </Cards>
      </SerContent>
    </Services>
  );
};

const Services = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 100%;
    padding: 2rem 0rem 4rem 0rem;
    @media (max-width: 1050px) {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
    text-align: center;
  }
  @media (max-width: 880px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

const Image = styled(motion.div)`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  margin-left: 2rem;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    @media (max-width: 1300px) {
      width: 100%;
    }
    @media (max-width: 880px) {
      height: 40vh;
    }
    @media (max-width: 450px) {
      margin-left: -2rem;
      height: 40vh;
    }
  }
  @media (max-width: 880px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    margin-left: 0rem;
    flex: 0;
  }
`;

const SerContent = styled(motion.div)`
  flex: 0.9;
  padding: 0rem 5rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    flex: 1.2;
  }
  h2 {
    font-weight: lighter;
    @media (max-width: 1150px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 450px) {
      font-size: 1.8rem;
      margin: 2rem 0rem;
      padding-bottom: 0rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
    text-align: center;
  }
  @media (max-width: 1150px) {
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
      @media (max-width: 1050px) {
        margin-left: 0.5rem;
        padding: 0.5rem;
      }
    }
    img {
      @media (max-width: 600px) {
        width: 5vh;
      }
      @media (max-width: 400px) {
        width: 3vh;
      }
    }
  }
  @media (max-width: 1150px) {
    flex-basis: 12rem;
  }
  @media (max-width: 1150px) {
    margin: 0rem 3rem;
  }
  @media (max-width: 560px) {
    width: fit-content;
    margin: 1rem;
  }
`;

export default ServicesSection;
