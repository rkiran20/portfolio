import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useScroll from "./useScroll";
import { scrollReveal, scrollRevealRight } from "../animation";

const Approach = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <ApproachWrapper>
      <motion.h1
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        My <em>-</em>
        <span> Approach</span>
      </motion.h1>
      <Card>
        <CardWrapper
          variants={scrollRevealRight}
          initial="hidden"
          animate={controls}
          ref={element}
        >
          <FrontBackWrapper>
            <Front>
              {" "}
              <h2>Planning and Strategy</h2>{" "}
            </Front>
            <Back>
              {" "}
              <p>
                We'll collaborate to map out your website's goals, target
                audience, and key functionalities. We'll discuss things like
                site structure, navigation, and content requirements.
              </p>{" "}
            </Back>
          </FrontBackWrapper>
        </CardWrapper>
        <CardWrapper
          variants={scrollRevealRight}
          initial="hidden"
          animate={controls1}
          ref={element1}
        >
          <FrontBackWrapper>
            <Front>
              {" "}
              <h2>Development & Progress Update</h2>{" "}
            </Front>
            <Back>
              {" "}
              <p>
                Once we agree on the plan, I cue my lofi playlist and dive into
                coding. From initial sketches to polished code, I keep you
                updated every step of the way.
              </p>{" "}
            </Back>
          </FrontBackWrapper>
        </CardWrapper>
        <CardWrapper
          variants={scrollRevealRight}
          initial="hidden"
          animate={controls2}
          ref={element2}
        >
          <FrontBackWrapper>
            <Front>
              {" "}
              <h2>Development & Launch</h2>{" "}
            </Front>
            <Back>
              {" "}
              <p>
                This is where the magic happens! Based on the approved design,
                I'll translate everything into functional code, building your
                website from the ground up
              </p>{" "}
            </Back>
          </FrontBackWrapper>
        </CardWrapper>
      </Card>
    </ApproachWrapper>
  );
};

const ApproachWrapper = styled(motion.div)`
  overflow: hidden;
  h1 {
    padding: 2rem;
    font-size: 4rem;
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 450px) {
      font-size: 1.5rem;
      padding: 2rem 1rem;
    }
  }
  em {
    opacity: 0;
    font-size: medium;
  }
`;
const CardWrapper = styled(motion.div)`
  perspective: 500px;
  transition: all 500ms;
`;
const Card = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  padding: 0rem 4rem;
  @media (max-width: 1020px) {
    padding: 0rem 2rem;
    margin: 2rem 2rem;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 800px) {
    margin: 0rem;
  }
`;
const Front = styled(motion.div)`
  height: 70vh;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 2px solid #23d997;
  transition: all 0.5s ease;
  margin: 2rem;
  padding: 2rem;
  border-radius: 5rem;
  overflow: hidden;
  transition: transform 1000ms;
  will-change: transform;
  backface-visibility: hidden;
  h2 {
    font-size: 2rem;
    padding: 1rem 2rem;
    font-weight: bolder;
    color: #66daaf;
    color: rgba(255, 255, 255, 0.6);
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
    @media (max-width: 1020px) {
      border-radius: 1rem;
    }
  }
  &:hover {
    border-color: black;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 1020px) {
    width: 60vh;
    flex: none;
    height: 40vh;
    border-radius: 3rem;
  }
  @media (max-width: 800px) {
    width: 90%;
    border-radius: 2rem;
  }
  @media (max-width: 330px) {
    width: 100%;
    height: 45vh;
  }
`;
const Back = styled(motion.div)`
  height: 70vh;
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 2px solid #23d997;
  transition: all 0.5s ease;
  margin: 0rem 2rem;
  padding: 2rem;
  border-radius: 5rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(-180deg);
  transition: transform 1000ms;
  will-change: transform;
  backface-visibility: hidden;
  &:hover {
    border-color: black;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 1020px) {
    width: 60vh;
    flex: none;
    height: 40vh;
    border-radius: 3rem;
  }
  @media (max-width: 800px) {
    width: 90%;
    border-radius: 2rem;
  }
  @media (max-width: 330px) {
    width: 100%;
    height: 45vh;
  }
`;

const FrontBackWrapper = styled(motion.div)`
  position: relative;
  width: 60vh;
  text-align: center;
  @media (max-width: 1400px) {
    width: 50vh;
  }
  @media (max-width: 1200px) {
    width: 40vh;
  }
  @media (max-width: 800px) {
    width: 80vh;
  }
  @media (max-width: 600px) {
    width: 70vh;
  }
  @media (max-width: 600px) {
    width: 55vh;
  }
  @media (max-width: 400px) {
    width: 45vh;
  }
  &:hover {
    ${Front} {
      transform: rotateY(180deg);
    }
    ${Back} {
      transform: rotateY(0deg);
    }
  }
  &:focus {
    ${Front} {
      transform: rotateY(180deg);
    }
    ${Back} {
      transform: rotateY(0deg);
    }
  }
`;

export default Approach;
