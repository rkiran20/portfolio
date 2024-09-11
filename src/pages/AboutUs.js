import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import MyApproach from "../components/MyApproach";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ width: "100%" }}
    >
      <AboutSection />
      <ServicesSection />
      <MyApproach />
      {/* <FaqSection /> */}
    </motion.div>
  );
};

export default AboutUs;
