import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const location = useLocation();
  const [sideBar, setSideBar] = useState(false);
  return (
    <Wrapper>
      <StyledNav>
        <h1>
          <Link to="/">Ravi Kiran</Link>
        </h1>
        <MenuBar
          onClick={() => {
            setSideBar(!sideBar);
          }}
          icon={faBars}
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
        <MenuUl
          onClick={() => {
            setSideBar(!sideBar);
          }}
        >
          <WrongMark icon={faXmark} />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/myWork">Projects</Link>
          </li>
          <li>
            <Link to="/experience">Experience </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </MenuUl>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: sticky;
  top: 0px;
  z-index: 99;
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
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #282828;
  margin-top: 0rem;
  z-index: 100;
  padding: 2rem;
  a {
    color: white;
    text-decoration: none;
    font-weight: lighter;
    font-size: 2rem;
  }
  li {
    color: white;
    list-style-type: none;
    font-size: 2rem;
    padding: 1rem;
    text-decoration: none;
    transition: all 0.5s ease-out;
    &:hover {
      transform: scale(1.1);
      color: #1eb6f7;
    }
  }
`;

const MenuBar = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 900px) {
    display: block;
    height: 3rem;
    color: white;
    cursor: pointer;
  }
`;

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
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
      color: #1eb6f7;
    }
  }
  ul {
    display: flex;
    list-style: none;
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
      font-size: 1rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`;

export default Nav;
