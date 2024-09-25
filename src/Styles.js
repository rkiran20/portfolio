import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #f1e7e7;
  @media (max-width: 1100px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 880px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
    align-items: start;
    justify-content: initial;
    margin-left: 2rem;
    margin-top: 4rem;
    min-height: auto;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-left: 10rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 450px) {
      font-size: 1.3rem;
    }
  }
  button {
    background-color: #23d997;
    color: black;
    border-radius: 2rem;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-5px);
    }
    @media (max-width: 880px) {
      margin: 2rem 0rem 3rem;
    }
    @media (max-width: 600px) {
      padding: 1rem;
      font-size: 1rem;
    }
    @media (max-width: 450px) {
      font-size: 0.7rem;
      padding: 0.5rem;
      margin: 0rem 0rem 1rem;
    }
  }
  p {
    @media (max-width: 880px) {
      padding: 2rem 0rem 1rem 0rem;
    }
    @media (max-width: 450px) {
      font-size: 0.8rem;
      padding: 1rem 0rem 1rem 0rem;
    }
  }

  @media (max-width: 1100px) {
    padding-left: 3rem;
    /* button {
      margin: 2rem 0rem 5rem 0rem;
    } */
  }
  @media (max-width: 600px) {
    padding-left: 0rem;
  }
  @media (max-width: 450px) {
    flex: 0;
    margin-bottom: 2rem;
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  margin-left: 2rem;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    border-radius: 3rem;
    @media (max-width: 880px) {
      height: 70vh;
    }
    @media (max-width: 450px) {
      margin-left: -2rem;
      height: 35vh;
    }
    @media (max-width: 350px) {
      margin-left: -2rem;
      height: 25vh;
    }
  }
  @media (max-width: 880px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    margin-left: 0rem;
    margin-top: 0rem;
    width: 100%;
    flex: 0;
  }
`;
export const Hide = styled.div`
  overflow-y: hidden;
`;
