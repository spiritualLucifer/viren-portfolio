import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { resumeURL, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import "./styles/SocialMedia.    css";

const SocialMedia = () => {
  return (
    <div className="py-0">
      <div className="flex justify-around" style={{ width: "20%" }}>
        <div className="icon">
          <a href="https://github.com/spiritualLucifer" target="_blank">
          <i
            className="fa-brands fa-github fa-xl"
            style={{ color: "white" }}
          ></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.linkedin.com/in/virendra-yadav-35bb30229/" target="_blank">
            <i class="fa-brands fa-linkedin fa-xl" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="icon">
          <a href="mailto:virenyadav453@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope fa-xl" style={{ color: "white" }}></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://leetcode.com/u/Bleak_MidWinter/" target="_blank">
            <i class="fa-solid fa-code fa-xl" style={{ color: "white" }}></i>
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default SectionWrapper(SocialMedia, "socialmedia");
