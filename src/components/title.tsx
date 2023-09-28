"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

const text1 = Array.from("Amaury Aparicio");
const text2 = Array.from("Software Engineer");
const text3 =
  ` I’m a Front End Developer specializing in React and Next.js, with 6
  years of experience creating interactive websites remotely. Passionate
  about embracing challenges and utilizing the latest technologies, I’m on
  a perpetual quest to enhance my skills and deliver innovative solutions.
  If you’re seeking a problem-solver with a flair for creativity and tech,
  let’s connect and build something extraordinary!`.split(" ");

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.08,
    },
  },
};

const letters = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const sentence2 = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.03,
    },
  },
};

export const Title = () => {
  return (
    <Fragment>
      <motion.h1
        className="font-bold text-center"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {text1.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}-text-1`}
            className="text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 bg-300% animate-gradient"
            variants={letters}
          >
            {letter}
          </motion.span>
        ))}
        <br />
        <br />
        {text2.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}-text-2`}
            className="text-2xl md:text-6xl"
            variants={letters}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="w-3/5 text-justify text-lg"
        variants={sentence2}
        initial="hidden"
        animate="visible"
      >
        {text3.map((letter, index) => (
          <motion.span key={`${letter}-${index}-text-3`} variants={letters}>
            {index + 1 === text3.length ? letter : `${letter} `}
          </motion.span>
        ))}
      </motion.p>
    </Fragment>
  );
};
