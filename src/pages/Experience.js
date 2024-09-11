import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../img/techno.png";
import logo1 from "../img/Saeternus.png";
import { horiEleReveal, pageAnimation } from "../animation";

const Experience = () => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const string = " E x p e r i e n c e";
  const heading = string.split(" ");
  return (
    <Wrapper
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HeadingWrapper>
        {heading.map((letter, index) => (
          <Heading
            variants={horiEleReveal}
            initial="hidden"
            animate="show"
            custom={index}
            key={index}
          >
            {letter}
          </Heading>
        ))}
      </HeadingWrapper>
      <ExperiencesWrapper>
        <Experience1
          onClick={() => {
            setIsClicked1(!isClicked1);
          }}
        >
          <Circle1>
            {" "}
            <img src={logo1} alt="logo"></img>{" "}
          </Circle1>
          <h1>Software Engineer Intern</h1>
          <h2>Saeternus </h2>
          <h3> April 2024 - July 2024</h3>
          <motion.p style={{ display: isClicked1 && "contents" }}>
            Worked as a software engineering intern at Saeternus, I am playing a
            key role in building their website. I utilize Next.js, Tailwind CSS,
            and TypeScript to contribute to a dynamic and user-friendly
            platform. I have a strong foundation in creating dynamic and
            responsive mobile and web applications. As a Next.js developer, I
            excel in crafting fast, scalable, and dynamic web applications with
            exceptional user experiences. My expertise lies in component-based
            architecture and state management, ensuring efficient and
            maintainable code. I continuously stay updated on the latest web
            development trends and technologies, keeping my skills sharp and
            adaptable.
          </motion.p>
        </Experience1>
        <Border></Border>
        <TimePeriod1> April 2024 - July 2024</TimePeriod1>
        <TimePeriod2> Jan 2024 - March 2024</TimePeriod2>
        <Experience2
          onClick={() => {
            setIsClicked2(!isClicked2);
          }}
        >
          <Circle2>
            <img src={image} alt="logo"></img>{" "}
          </Circle2>
          <h1> Frontend Developer Intern</h1>
          <h2>Technocolabs Softwares</h2>
          <h3> Jan 2024 - March 2024</h3>
          <p style={{ display: isClicked2 && "contents" }}>
            I built a dynamic e-commerce website with a responsive and intuitive
            user interface that includes features like a product page,
            interactive product discussions, and a cart, among many others.
            Leveraging ReactJS and JavaScript, I architected the frontend and
            managed state for different users. I used Firebase for backend
            authentication and integrated Redux for effective state management.
            Additionally, I converted static HTML into dynamic React components
            to enhance the performance of the application.
          </p>
        </Experience2>
      </ExperiencesWrapper>
    </Wrapper>
  );
};

const TimePeriod1 = styled.b`
  grid-area: date1;
  font-size: 2rem;
  color: #c4c0c0;
  margin-top: 6rem;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const TimePeriod2 = styled(TimePeriod1)`
  grid-area: date2;
  justify-self: end;
`;

const Wrapper = styled(motion.div)`
  background-color: #0e0f23;
  padding: 3rem 0rem;
`;

const HeadingWrapper = styled(motion.div)`
  width: fit-content;
  margin: auto;
  padding: 2rem 2rem;
  overflow: hidden;
`;

const Heading = styled(motion.h2)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: rgb(203 172 249);
`;

const ExperiencesWrapper = styled(motion.div)`
  display: grid;
  grid-template-areas:
    "experience1 border date1"
    "date2 border experience2";
  grid-template-columns: 1fr 5px 1fr;
  /* grid-template-rows: 1fr 1fr; */
  gap: 4rem 8rem;
  padding: 2rem 6rem;
  @media (max-width: 1200px) {
    grid-template-areas:
      " border experience1"
      " border experience2";
    grid-template-columns: 5px auto;
    grid-template-rows: auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: 3px auto;
    grid-template-rows: auto auto;
    padding: 2rem 2rem 2rem 3.5rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem 2rem 2rem;
    gap: 2rem 2rem;
  }
`;

const Experience1 = styled(motion.div)`
  background-color: rgb(29, 24, 54);
  grid-area: experience1;
  border: 2px solid black;
  border-radius: 3rem;
  margin-top: 2rem;
  padding: 2rem 3rem;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 30px rgba(235, 83, 83, 0.4);
  transition: 1s ease;
  &:hover {
    box-shadow: 0px 0px 30px rgba(33, 233, 187, 0.4);
  }
  h1 {
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 1.3rem;
    padding-bottom: 2rem;
    color: rgb(255, 255, 255);
    @media (max-width: 1200px) {
      padding-bottom: 0.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
    @media (max-width: 350px) {
      padding-bottom: 0.5rem;
    }
  }
  h3 {
    display: none;
    @media (max-width: 1200px) {
      display: contents;
    }
  }
  p {
    padding-top: 0rem;
    padding-bottom: 0rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    transition: all 0.5s ease;
    @media (max-width: 1200px) {
      margin-top: 2rem;
    }
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 350px) {
    padding: 1rem 1rem;
    border-radius: 1rem;
  }
`;

const Border = styled(motion.div)`
  grid-area: border;
  background-color: whitesmoke;
  height: 100%;
  @media (max-width: 720px) {
    height: 100%;
  }
`;

const Circle1 = styled(motion.div)`
  width: 7rem;
  height: 7rem;
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  overflow: hidden;
  right: -11.8rem;
  @media (max-width: 1200px) {
    right: 0;
    left: -11.8rem;
  }
  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    border: 2px solid white;
    left: -3.7rem;
  }
`;

const Circle2 = styled(Circle1)`
  right: 0rem;
  left: -12rem;
  @media (max-width: 1200px) {
    left: -11.8rem;
  }
  @media (max-width: 500px) {
    width: 3rem;
    height: 3rem;
    border: 2px solid white;
    left: -3.7rem;
  }
`;

const Experience2 = styled(Experience1)`
  grid-area: experience2;
`;

export default Experience;
