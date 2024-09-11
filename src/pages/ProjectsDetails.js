import React, { useState } from "react";
import { motion } from "framer-motion";
import useScroll from "../components/useScroll";
import styled from "styled-components";
import {
  horiEleReveal,
  horiEleRevealDelay,
  movingUp,
  none,
  pageAnimation,
  scrollReveal,
  scrollRevealLeft,
  scrollRevealRight,
} from "../animation";
import { projectDetails } from "../Data";
import { Link, useLocation } from "react-router-dom";

const SpecificProjectDetails = () => {
  const location = useLocation();
  const num = location.pathname.split("/").pop();
  const numId = Number(num);
  const data = projectDetails[numId - 1];
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );
  const animationVariant = isMobile ? none : scrollReveal;

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <HeadingWrapper>
          <Heading>
            {data.name.map((letter, index) => (
              <StyledLetter
                custom={index}
                variants={movingUp}
                initial="hidden"
                animate="show"
                key={index}
              >
                {letter}
              </StyledLetter>
            ))}
            <StyledLink to={data.liveServer} target="_blank">
              <h3>Check Live Site</h3>
            </StyledLink>
          </Heading>
          <StyledLink to="/myWork">
            <h4>Back</h4>
          </StyledLink>
        </HeadingWrapper>
        <Details>
          <p>{data.details}</p>
        </Details>
        <Stack>
          <h1>
            {data.stack.map((letter, index) => (
              <StyledLetter
                variants={horiEleRevealDelay}
                initial="hidden"
                animate="show"
                custom={index}
                key={index}
              >
                {letter}
              </StyledLetter>
            ))}
          </h1>
          <Skills>
            {data.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </Skills>
        </Stack>
      </div>
      <ProjectWrapper>
        <Goal
        // variants={animationVariant}
        // ref={element}
        // initial="hidden"
        // animate={controls}
        >
          <GoalImage>
            <img src={data.image1} alt="pro-logo"></img>
          </GoalImage>
          <GoalDetails>
            <h2>Goals</h2>
            <p>{data.goal}</p>
          </GoalDetails>
        </Goal>
        <Goal
          variants={animationVariant}
          ref={element2}
          initial="hidden"
          animate={controls2}
        >
          <GoalDetails>
            <h2>Web Stack and Explanation</h2>
            <p>{data.aboutProject}</p>
          </GoalDetails>
          <GoalImage>
            <img src={data.image2} alt="pro-logo"></img>
          </GoalImage>
        </Goal>
        <Thoughts>
          <motion.h1
            variants={animationVariant}
            initial="hidden"
            animate={controls3}
            ref={element3}
          >
            Problems and Thought Process
          </motion.h1>
          <motion.p
            variants={animationVariant}
            initial="hidden"
            animate={controls3}
            ref={element3}
          >
            {data.problemsAndThoughts}{" "}
          </motion.p>
        </Thoughts>
        <StyledImage
          variants={animationVariant}
          ref={element4}
          initial="hidden"
          animate={controls4}
        >
          <img src={data.image3} alt="logo"></img>
        </StyledImage>
      </ProjectWrapper>
    </motion.div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    height: fit-content;
    overflow: hidden;
    color: white;
    //font-size: 4rem;
    padding: 2rem 1rem 0rem 1rem;
    margin: 2rem 4rem 0rem 4rem;
    border-bottom: 2px solid wheat;
    @media (max-width: 900px) {
      font-size: 2rem;
      padding: 2rem 1rem 0rem 2rem;
      margin: 2rem 4rem 0rem 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
      padding: 2rem 1rem 0rem 0rem;
      margin: 3rem 2rem 0rem 2rem;
    }
  }
`;

const StyledImage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  img {
    object-fit: cover;
    overflow: hidden;
    width: 80%;
    aspect-ratio: 5/2;
    @media (max-width: 900px) {
      width: 70%;
    }
  }
`;

const StyledLetter = styled(motion.b)`
  display: inline-block;
  color: #23d997;
`;

const Heading = styled(motion.h1)`
  height: fit-content;
  overflow: hidden;
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-size: 4rem;
  padding: 2rem 1rem 2rem 4rem;
  margin: 2rem 1rem 0rem 4rem;
  h3 {
    font-size: 1.5rem;
    padding: 1rem;
    line-height: 0rem;
    margin-top: 2.2rem;
    margin-left: 3rem;
    border-bottom: 2px solid wheat;
    @media (max-width: 900px) {
      font-size: 1.2rem;
      padding: 0.5rem 0.5rem 0rem;
    }
    @media (max-width: 660px) {
      margin-top: 0rem;
      padding: 1rem 1rem 1rem 0rem;
      margin-left: 0rem;
    }
  }
  @media (max-width: 900px) {
    font-size: 3rem;
    padding: 2rem 1rem 0rem 2rem;
  }
  @media (max-width: 500px) {
    font-size: 2.5rem;
    padding: 2rem 1rem 0rem 0rem;
    margin: 2rem 1rem 0rem 2rem;
  }
`;

const Details = styled(motion.div)`
  padding: 0rem 4rem;
  p {
    margin: 0rem 4rem;
    max-width: 120vh;
    font-size: 1.5rem;
    @media (max-width: 900px) {
      font-size: 1.3rem;
      margin: 0rem 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.1rem;
      margin: 0rem 0rem;
      padding: 1rem 0rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;

const Stack = styled(motion.div)`
  h1 {
    width: fit-content;
    margin: 0rem auto 3rem;
    color: white;
    font-size: 3rem;
    @media (max-width: 900px) {
      font-size: 1.8rem;
      margin: 0rem auto 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
      margin: 0rem auto 2rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem 5rem 2rem;
  }
`;

const Skills = styled(motion.div)`
  display: flex;
  gap: 4rem;
  text-align: center;
  justify-content: center;
  color: white;
  @media (max-width: 900px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

const Skill = styled(motion.div)`
  border: 1px solid white;
  padding: 0.6rem 1rem;
  width: fit-content;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
  transition: all 1s ease;
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 7.5px;
  }
  &:hover {
    background-color: #d8d1d1;
    color: black;
    border-color: black;
    transform: rotate(5deg) scale(1.2);
  }
`;
const ProjectWrapper = styled(motion.div)``;

const Goal = styled(motion.div)`
  display: flex;
  gap: 5rem;
  padding: 4rem;
  margin: 0rem 4rem;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
    gap: 3rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
    margin: 0rem 1rem;
  }
`;
const GoalImage = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  height: 50vh;
  border-radius: 2rem;
  flex-shrink: 1;
  @media (max-width: 900px) {
    height: unset;
    width: 100%;
    aspect-ratio: 5/2;
  }
  @media (max-width: 500px) {
    height: unset;
    width: 100%;
    aspect-ratio: 5/2;
  }
`;

const GoalDetails = styled(motion.div)`
  flex: 1;
  flex-shrink: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: #23d997;
    font-weight: bolder;
    font-size: 2.5rem;
    @media (max-width: 900px) {
      font-size: 2.2rem;
    }
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.5rem;
    @media (max-width: 900px) {
      font-size: 1.3rem;
      margin-top: -1rem;
    }
    @media (max-width: 500px) {
      font-size: 1.1rem;
      margin-top: -1rem;
    }
  }
`;

const Thoughts = styled(motion.div)`
  h1 {
    width: fit-content;
    margin: auto;
    color: #23d997;
    @media (max-width: 500px) {
      font-size: 1.3rem;
      margin: 2rem 2rem 0rem 2rem;
    }
  }
  p {
    width: 130vh;
    padding: 3rem 4rem;
    margin: auto;
    @media (max-width: 900px) {
      font-size: 1.3rem;
      padding: 2rem 2rem;
      width: 80%;
    }
    @media (max-width: 500px) {
      font-size: 1.1rem;
      padding: 2rem 0rem;
      width: 80%;
      margin: 0rem 2rem;
    }
  }
`;

export default SpecificProjectDetails;
