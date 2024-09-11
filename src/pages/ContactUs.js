import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_9ozuwcm",
        "template_nxoagi1",
        {
          name: form.name,
          to_name: "ravi",
          email: form.email,
          to_email: "ravikiranvavilapalli20@gmail.com",
          message: form.message,
        },
        "0YZ1zXBjAmJUOTrw-"
      );
      setLoading(false);
      alert("your message has been sent!");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("something went wrong");
    }
  };
  return (
    <ContactStyle
      variants={pageAnimation}
      exit="exit"
      animate="show"
      initial="hidden"
    >
      <h3>Get In Touch</h3>
      <h2>Contact Me</h2>
      <Wrapper>
        <MessagesWrapper>
          <MessageWrapper>
            <Icon icon={faEnvelope} />
            <h4>Email</h4>
            <h5>ravikiranvavilapalli20@gmail.com</h5>
            <a
              href="mailto:ravikiranvavilapalli20@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </MessageWrapper>
          <MessageWrapper>
            <Icon icon={faWhatsapp} />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone+916305298223"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message{" "}
            </a>
          </MessageWrapper>
        </MessagesWrapper>
        <Forms ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Your Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </Forms>
      </Wrapper>
    </ContactStyle>
  );
};

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  input,
  textarea {
    width: 100%;
    font-size: 1.2rem;
    color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid #9ff8d7;
    resize: none;
  }
  button {
    width: 45%;
    color: #691bdf;
    background-color: #9ff8d7;
    border: 2px solid black;
    border-radius: 2rem;
    &:hover {
      color: #02f89e;
      background-color: #353535;
      border-color: #cbacf9;
    }
  }
`;

const Wrapper = styled(motion.div)`
  width: 58%;
  display: grid;
  grid-template-columns: 35% 58%;
  gap: 12%;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const MessagesWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  color: black;
  height: 2rem;
  &:hover {
    color: white;
  }
`;

const MessageWrapper = styled(motion.div)`
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: all 1s ease;
  color: black;
  background-color: #9ff8d7;
  &:hover {
    color: white;
    a {
      color: #02f89e;
    }
    ${Icon} {
      color: white;
    }
  }
  h4 {
    padding: 0.5rem 0rem 0rem;
  }
  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 1rem;
    text-decoration: none;
    color: #691bdf;
    font-weight: bolder;
    &:hover {
      color: #02f89e;
    }
  }
  &:hover {
    background-color: #353535;
    border-color: #cbacf9;
  }
`;

const ContactStyle = styled(motion.div)`
  padding: 5rem 5rem;
  color: #353535;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h3 {
    font-size: 1.5rem;
    color: grey;
  }
  h2 {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 4rem;
    color: #23d997;
  }
  @media (max-width: 1500px) {
    font-size: 1rem;
    padding: 2rem;
  }
`;

export default ContactUs;
