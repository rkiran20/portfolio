import React from "react";
import styled from "styled-components";
import { About } from "../Styles";
import Toggle from "./Toggle";
import useScroll from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle title="How do i Start?">
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nobis sapiente aut provident sit tempore qui, veniam iure quod.
            Dolor, eius. Voluptate dolores praesentium mollitia ad nam
            molestias, explicabo et.
          </p>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nobis sapiente aut provident sit tempore qui, veniam iure quod.
            Dolor, eius. Voluptate dolores praesentium mollitia ad nam
            molestias, explicabo et.
          </p>
        </div>
      </Toggle>
      <Toggle title="Different Payment methods">
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nobis sapiente aut provident sit tempore qui, veniam iure quod.
            Dolor, eius. Voluptate dolores praesentium mollitia ad nam
            molestias, explicabo et.
          </p>
        </div>
      </Toggle>
      <Toggle title="What products do i offer?">
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            nobis sapiente aut provident sit tempore qui, veniam iure quod.
            Dolor, eius. Voluptate dolores praesentium mollitia ad nam
            molestias, explicabo et.
          </p>
        </div>
      </Toggle>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 0rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
