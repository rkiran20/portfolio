import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(90deg, #6190e8, #a7bfe8);
  }
`;

const Form = styled(motion.form)`
  min-height: 40vh;
  width: 40vw;
  background: white;
  color: #777474;
  border-radius: 2rem;
  padding: 3rem 5rem;
  display: flex;
  position: relative;
  @media screen and (max-width: 812px) {
    width: 90vw;
    min-height: 80vh;
    flex-direction: column;
    padding: 8rem 3rem;
  }
`;

const Title = styled.h1`
  color: #6391e8;
`;

const ContactLeft = styled.div`
  flex: 1;
`;

const ContactRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  border: none;
  outline: none;
  color: #777474;
  font-size: 0.7rem;
`;

const Placeholder = styled(motion.label)`
  position: relative;
  z-index: 1;
  pointer-events: none;
  padding: 0.3rem 0rem;
  font-size: 0.6rem;
  opacity: 0.6;
  transform-origin: left;
`;

const LineSVG = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: visible;
  opacity: 0.8;
  @media screen and (max-width: 812px) {
    width: 100%;
  }
`;

const CheckboxContainer = styled.div`
  position: relative;
  height: 1rem;
  width: 1rem;
  border-radius: 3px;
  overflow: hidden;
`;

const CheckboxFill = styled(motion.div)`
  position: absolute;
  background: #6190e8;
  width: 100%;
  height: 100%;
  top: 100%;
`;

const TickMark = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  z-index: 2;
`;

const CheckboxLabel = styled(motion.label)`
  font-size: 0.7rem;
  padding-left: 0.5rem;
`;

const Button = styled(motion.button)`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  background: #6190e8;
  color: white;
  border-radius: 0.2rem;
  border-style: none;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  margin-top: 1rem;
  align-self: flex-start;
`;

const Submitted = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #777474;
  font-size: 1rem;
  pointer-events: none;
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const Character = styled.div`
  position: absolute;
  transform: scale(0.6) translate(0%, 30%);
  bottom: 0;
  left: 0;
  transform-origin: bottom;

  @media screen and (max-width: 812px) {
    transform: scale(0.4) translate(0%, 30%);
  }
`;

export default function MyForm() {
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Framer Motion variants for animations
  const lineVariants = {
    focus: {
      d: "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512",
    },
    initial: {
      d: "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512",
    },
  };

  const checkboxVariants = {
    checked: { top: "0%" },
    unchecked: { top: "100%" },
  };

  const tickVariants = {
    checked: { strokeDashoffset: 0 },
    unchecked: { strokeDashoffset: 100 },
  };

  const handleInputFocus = () => {
    if (!inputValue) {
      // Placeholder animation when input is focused
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <GlobalStyle>
      <Form
        initial={{ scale: 1 }}
        animate={submitted ? { scale: 0.8 } : { scale: 1 }}
        onSubmit={handleFormSubmit}
      >
        <Title>Contact Us</Title>
        <ContactLeft>
          <InputContainer>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={handleInputFocus}
            />
            <Placeholder
              initial={{ top: 0, scale: 1 }}
              animate={
                inputValue ? { top: -15, scale: 0.7 } : { top: 0, scale: 1 }
              }
            >
              Your Name
            </Placeholder>
            <LineSVG width="300" height="2" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                className="elastic-line"
                d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512"
                stroke="#777474"
                strokeWidth="2"
                fill="none"
                variants={lineVariants}
                animate={inputValue ? "focus" : "initial"}
              />
            </LineSVG>
          </InputContainer>
        </ContactLeft>
        <ContactRight>
          <CheckboxContainer>
            <input
              type="checkbox"
              className="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <CheckboxFill
              variants={checkboxVariants}
              animate={checked ? "checked" : "unchecked"}
            />
            <TickMark className="tick-mark">
              <motion.path
                d="M5 13l4 4L19 7"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={tickVariants}
                initial="unchecked"
                animate={checked ? "checked" : "unchecked"}
              />
            </TickMark>
            <CheckboxLabel animate={{ color: checked ? "#6391e8" : "#c5c5c5" }}>
              Subscribe to our newsletter
            </CheckboxLabel>
          </CheckboxContainer>
          <Button type="submit">Submit</Button>
        </ContactRight>
        <Character id="character">
          {/* Character SVG/animation can be added here */}
        </Character>
        <Submitted
          initial={{ opacity: 0, y: 30 }}
          animate={submitted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        >
          Form Submitted!
        </Submitted>
      </Form>
    </GlobalStyle>
  );
}
