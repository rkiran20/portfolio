import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skillsData } from "../Data";
import useScroll from "./useScroll";
import image from "../img/myImage1.jpg";
import { pageAnimation, photoAnimSmall, upDown } from "../animation";

const MyAbout = () => {
  const [element, controls] = useScroll();
  return (
    <AboutWrapper
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.h1>About Me</motion.h1>
      <AboutSectionWrapper>
        <MyImage variants={photoAnimSmall} initial="hidden" animate="show">
          <img src={image} alt="abtImage"></img>
        </MyImage>
        <MyIntro>
          <p>
            <b>I'm</b> a 21-year-old recent graduate from <b> IIT Kanpur </b>{" "}
            with hands-on experience in front-end development, gained through
            various internships and projects.
          </p>
          <p>
            As I've grown as a developer , I've worked along side senior
            developers and developers who have raised my standards for whats
            expected of an web application
          </p>
          <p>
            Through these experiences, I've had opportunity to create memorable
            products that are not only enjoyable to use, but are written in code
            thats maintainable and easy to understand{" "}
          </p>
          <p>
            Since then, I’ve been honing my skills and deepening my knowledge of
            JavaScript. Recently, I graduated from IIT Kanpur, and I am actively
            seeking a full-time role where I can help companies achieve their
            goals. I now spend a lot more time refactoring and improving every
            line I code I write, for the best readability and far fewer
            headaches
          </p>
        </MyIntro>
      </AboutSectionWrapper>
      <SkillsWrapper>
        <motion.h1>Skills</motion.h1>
        <SkillsDes>
          I have a strong foundation in{" "}
          <span>Data Structures and Algorithms</span>, developed during my
          college years. In addition to that, I have studied the documentations
          and many Blogs of <span>JavaScript</span>, <span>React</span>, and{" "}
          <span>Next.js</span>, and have applied this knowledge through hands-on
          experience in various projects.
        </SkillsDes>
        <Skills>
          {skillsData.map((data, index) => (
            <Skill
              ref={element}
              variants={upDown}
              animate={controls}
              initial="hidden"
              key={index}
              custom={index}
              whileHover={{ scale: 1.1 }}
            >
              {data}
            </Skill>
          ))}
        </Skills>
      </SkillsWrapper>
    </AboutWrapper>
  );
};

const Skills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  color: grey;
  font-size: large;
  max-width: 90vh;
  margin: 3rem auto 7rem;
  @media (max-width: 750px) {
    padding: 0rem 2rem;
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }
`;

const Skill = styled(motion.div)`
  border: 1px solid white;
  padding: 0.6rem 1rem;
  border-radius: 15px;
  box-shadow: 0px 0px 15px rgba(231, 229, 229, 0.4);
  cursor: pointer;
  transition: transform 1s ease;
  &:hover {
    box-shadow: 0px 0px 15px rgba(244, 161, 98, 0.9);
    color: black;
    background-color: grey;
    border: black;
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

const AboutWrapper = styled(motion.div)`
  overflow: hidden;
  h1 {
    display: flex;
    justify-content: center;
    padding: 3rem 3rem;
    color: #8b4612;
    font-size: 3.5rem;
  }
`;

const AboutSectionWrapper = styled(motion.div)`
  display: flex;
  padding: 3rem 8rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: 3rem 1rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }
`;

const MyImage = styled(motion.div)`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    width: 30rem;
    line-height: 0px;
    overflow: hidden;
    object-fit: cover;
    transition: transform 1s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1200px) {
    flex: 2;
  }
  @media (max-width: 500px) {
    width: 20rem;
    height: 30rem;
  }
`;

const MyIntro = styled(motion.div)`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 1rem 0rem 1rem 4rem;
  p {
    padding: 1rem 0rem;
    font-size: 1.7rem;
    b {
      display: inline-block;
      color: #23d997;
      font-size: 2.5rem;
      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 500px) {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1200px) {
    padding: 1rem 0rem 1rem 2rem;
  }
`;

const SkillsWrapper = styled(motion.div)`
  h1 {
    display: flex;
    justify-content: center;
    padding: 3rem 3rem;
    color: #8b4612;
    font-size: 3.5rem;
  }
`;

const SkillsDes = styled(motion.div)`
  max-width: 900px;
  font-size: 1.9rem;
  color: white;
  margin: auto;
  padding: 0rem 2rem;
`;

export default MyAbout;
