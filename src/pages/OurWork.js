import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  slider,
  sliderCon,
  scrollRevealLate,
} from "../animation";
import { projectsData } from "../Data";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderCon}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Wrapper>
        <motion.h2>Projects</motion.h2>
        <Project variants={scrollRevealLate} initial="hidden" animate="show">
          {projectsData.map((project) => (
            <StyledLink key={project.id} to={`/myWork/${project.id}`}>
              <ProjectsWrapper>
                <ProjectImage>
                  <img src={project.image} alt="pro-logo"></img>
                </ProjectImage>
                <ProjectDetails>
                  <h3>{project.projectName}</h3>
                  <p>{project.details}</p>
                  <SkillWrapper>
                    {project.skills.map((skill) => (
                      <SkillBtn key={skill}>{skill}</SkillBtn>
                    ))}
                  </SkillWrapper>
                </ProjectDetails>
              </ProjectsWrapper>
            </StyledLink>
          ))}
        </Project>
      </Wrapper>
    </Work>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled(motion.div)`
  background-color: black;
  h2 {
    color: #686968;
    margin: auto;
    width: fit-content;
    padding: 2rem;
    font-weight: bold;
  }
`;

const Project = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectImage = styled(motion.div)`
  flex: 1;
  position: relative;
  overflow: hidden;
  margin-top: 3rem;
  border-top-right-radius: 2rem;
  transition: transform 0.3s ease-in;
  img {
    position: absolute;
    left: -20px;
    top: 0px;
    line-height: 0;
    @media (max-width: 600px) {
    }
  }
  @media (max-width: 600px) {
    margin-top: 0rem;
    border-top-right-radius: 0rem;
  }
`;

const ProjectDetails = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  h3 {
    font-size: 2rem;
    transition: 1s ease;
    text-decoration: none;
  }
  p {
    color: #dfdbdb;
    font-size: 1.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    padding: 0rem;
    margin: 1rem 0rem;
    transition: 1s ease;
    text-decoration: none;
  }
  @media (max-width: 600px) {
    padding: 0rem 2rem 1rem 2rem;
  }
`;

const SkillBtn = styled(motion.div)`
  padding: 5px 10px;
  border: 2px solid white;
  color: white;
  border-radius: 8px;
  transition: 1s ease;
  text-decoration: none;
`;

const ProjectsWrapper = styled(motion.div)`
  width: 80vh;
  height: 40vh;
  border: 2px solid black;
  border-radius: 1rem;
  box-shadow: 0px 0px 30px rgba(233, 229, 229, 0.4);
  display: flex;
  gap: 2.5rem;
  overflow: hidden;
  margin: 2rem;
  transition: 1s ease;
  perspective: 1000px;
  transform-style: preserve-3d;
  z-index: 1;
  &:hover ${ProjectImage} {
    transform: translate(3px, 2px) rotate(5deg) scale(1.04);
  }
  &:hover {
    background-color: grey;
    box-shadow: 0px 0px 30px rgba(108, 245, 98, 0.8);
    transform: scale(1.15);
    z-index: 2;
    /* transform: ; */
    ${SkillBtn} {
      color: black;
      border-color: black;
    }
    ${ProjectDetails} {
      h3 {
        color: black;
      }
      p {
        color: black;
      }
    }
  }
  @media (max-width: 800px) {
    width: 35vh;
    height: 60vh;
    flex-direction: column;
  }
  @media (max-width: 380px) {
    width: 90%;
    height: 60vh;
    flex-direction: column;
  }
`;

const SkillWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  color: #a19e9e;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
export default OurWork;
