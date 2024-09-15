import React from "react";
import Responsive from "./Responsive";
import { motion } from "framer-motion";
import PageEndIcon from "@rsuite/icons/PageEnd";

const About = () => {
  return (
    <React.Fragment className="p-10">
      <Responsive
        m={8}
        x={8}
        xl={8}
        style={{ height: "70vh", position: "relative" }}
        className="p-10"
      >
        <p className="text-8xl font-bold text-black">Hello, I'm Bouraoui, </p>
        <p className="text-5xl font-bold mt-5 text-black ml-60">
          a Full-Stack Web developper
        </p>
      </Responsive>
    </React.Fragment>
  );
};

export default About;
