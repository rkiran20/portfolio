import React from "react";
import home1 from "../img/home1.png";
import { About, Hide, Description, Image } from "../Styles";
import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hii,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm <span>Ravi,</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>a Font-End Developer</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Turn Ideas into <span> User-Friendly</span> Applications
        </motion.p>
        <Link to="/contact">
          {" "}
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="its_me"></motion.img>
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
