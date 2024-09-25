import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { MenuTransition, pageAnimation } from "../animation";

const Nav = () => {
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);
  return (
    <Wrapper>
      <StyledNav>
        <h1
          onClick={() => {
            setSideBar(false);
          }}
        >
          <Link to="/">Ravi Kiran</Link>
        </h1>
        <MenuBar
          onClick={() => {
            setSideBar(!sideBar);
          }}
          icon={sideBar ? faXmark : faBars}
        ></MenuBar>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: location.pathname === "/" ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/about">About</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: location.pathname === "/about" ? "50%" : "0%" }}
            />
          </li>
          <li>
            <Link to="/myWork">Projects</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: location.pathname === "/myWork" ? "50%" : "0%",
              }}
            />
          </li>
          <li>
            <Link to="/experience">Experience </Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: location.pathname === "/experience" ? "50%" : "0%",
              }}
            />
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{
                width: location.pathname === "/contact" ? "50%" : "0%",
              }}
            />
          </li>
        </ul>
      </StyledNav>
      {sideBar && (
        <AnimatePresence>
          <MenuUl
            variants={MenuTransition}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            {/* <WrongMark icon={faXmark} /> */}

            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/myWork">
              <li>Projects</li>
            </Link>
            <Link to="/experience">
              <li>Experience</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </MenuUl>
        </AnimatePresence>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: sticky;
  top: 0px;
  z-index: 99;
`;

const MenuWrapper = styled(motion.div)`
  transition: all ease 1s;
`;

const WrongMark = styled(FontAwesomeIcon)`
  height: 3rem;
  color: #e97f7f;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-top: -1.5rem;
`;

const MenuUl = styled(motion.ul)`
  position: absolute;
  width: 100%;
  top: -20px;
  right: 0px;
  background-color: rgba(231, 225, 225, 0.9);
  margin-top: 0rem;
  z-index: 9;
  padding: 2rem 2rem 0rem;
  margin-top: 7rem;
  a {
    color: black;
    text-decoration: none;
    font-weight: lighter;
    font-size: 2rem;
    @media (max-width: 450px) {
      font-size: 1rem;
      font-weight: bolder;
    }
  }
  li {
    color: black;
    list-style-type: none;
    font-size: 2rem;
    padding: 0.7rem;
    font-weight: lighter;
    text-decoration: none;
    transition: all 0.5s ease-out;
    @media (max-width: 450px) {
      font-size: 1rem;
      font-weight: bolder;
    }
    &:hover {
      transform: scale(1.1);
      color: #23d997;
    }
  }
`;

const MenuBar = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 900px) {
    display: block;
    height: 3rem;
    color: ${(props) => (props.sideBar ? "red" : "white")};
    cursor: pointer;
    @media (max-width: 450px) {
      height: 1.5rem;
    }
  }
`;

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 900px) {
    padding: 1rem 3rem 1rem 10rem;
  }
  @media (max-width: 450px) {
    padding: 1rem 3rem 1rem 3rem;
  }
  h1 {
    font-family: "abril Fatface", cursive;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: lighter;
    font-size: 2rem;
    transition: all 0.5s ease;
    &:hover {
      color: #23d997;
    }
    @media (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  ul {
    display: flex;
    list-style: none;
    padding-top: 5px;
    @media (max-width: 900px) {
      display: none;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
    a {
      font-size: 1.5rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 5%;
  position: absolute;
  bottom: -30%;
  left: 55%;
`;

export default Nav;
