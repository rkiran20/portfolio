import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import {
  scrollReveal,
  scrollRevealRight,
  titleAnim,
  titleAnimRev,
} from "../animation";
import useScroll from "./useScroll";

const MyApproach = () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [onHover1, SetOnHover1] = useState(false);
  const [onHover2, SetOnHover2] = useState(false);
  const [onHover3, SetOnHover3] = useState(false);
  return (
    <Approach>
      <motion.h1
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        My <em>-</em>
        <span> Approach</span>
      </motion.h1>
      <ApproachWrapper>
        <MyAppCon
          variants={scrollRevealRight}
          initial="hidden"
          animate={controls}
          ref={element}
          onClick={() => {
            SetOnHover1(!onHover1);
          }}
          onHoverStart={() => {
            SetOnHover1(!onHover1);
          }}
          onHoverEnd={() => {
            SetOnHover1(!onHover1);
          }}
          style={{ backgroundColor: onHover1 && "#29232e" }}
        >
          {!onHover1 ? (
            <h2>Phase 1</h2>
          ) : (
            <Content>
              <motion.h3
                variants={titleAnimRev}
                initial="hidden"
                animate="show"
              >
                Planning & Strategy
              </motion.h3>
              <motion.p variants={titleAnim} initial="hidden" animate="show">
                We'll collaborate to map out your website's goals, target
                audience, and key functionalities. We'll discuss things like
                site structure, navigation, and content requirements.
              </motion.p>
            </Content>
          )}
        </MyAppCon>
        <MyAppCon
          variants={scrollRevealRight}
          initial="hidden"
          animate={controls2}
          ref={element2}
          onClick={() => {
            SetOnHover2(!onHover2);
          }}
          onHoverStart={() => {
            SetOnHover2(!onHover2);
          }}
          onHoverEnd={() => {
            SetOnHover2(!onHover2);
          }}
          style={{ backgroundColor: onHover2 && "#46383c" }}
        >
          {!onHover2 ? (
            <h2>Phase 2</h2>
          ) : (
            <Content>
              <motion.h3
                variants={titleAnimRev}
                initial="hidden"
                animate="show"
              >
                Development & Progress Update
              </motion.h3>
              <motion.p variants={titleAnim} initial="hidden" animate="show">
                Once we agree on the plan, I cue my lofi playlist and dive into
                coding. From initial sketches to polished code, I keep you
                updated every step of the way.
              </motion.p>
            </Content>
          )}
        </MyAppCon>
        <MyAppCon
          variants={scrollRevealRight}
          initial="hidden"
          animate={controls1}
          ref={element1}
          onClick={() => {
            SetOnHover3(!onHover3);
          }}
          onHoverStart={() => {
            SetOnHover3(!onHover3);
          }}
          onHoverEnd={() => {
            SetOnHover3(!onHover3);
          }}
          style={{ backgroundColor: onHover3 && "#705549" }}
        >
          {!onHover3 ? (
            <h2>Phase 3</h2>
          ) : (
            <Content>
              <motion.h3
                variants={titleAnimRev}
                initial="hidden"
                animate="show"
              >
                Development & Launch
              </motion.h3>
              <motion.p variants={titleAnim} initial="hidden" animate="show">
                This is where the magic happens! Based on the approved design,
                I'll translate everything into functional code, building your
                website from the ground up
              </motion.p>
            </Content>
          )}
        </MyAppCon>
      </ApproachWrapper>
    </Approach>
  );
};

const MyAppCon = styled(motion.div)`
  height: 70vh;
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
  h2 {
    font-size: 2rem;
    border: 3px solid #23d997;
    border-radius: 5rem;
    padding: 1rem 2rem;
    font-weight: bolder;
    color: #66daaf;
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
`;

const Content = styled(motion.div)`
  h3 {
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e8e5e5;
    @media (max-width: 450px) {
      font-size: 1.2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.7rem;
    }
  }
  p {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    color: #f2f2f2;
    @media (max-width: 450px) {
      font-size: 0.8rem;
    }
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;

const Approach = styled(motion.div)`
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

const ApproachWrapper = styled(motion.div)`
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

export default MyApproach;
