"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { AtSign, Briefcase, Code, User } from "lucide-react";

const list = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export const Links = () => {
  return (
    <motion.ul
      className="flex flex-col items-center justify-between gap-2 md:py-14 lg:py-24"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="text-center font-bold" variants={item}>
        <Link
          href="/about"
          as={NextLink}
          color="foreground"
          size="lg"
          underline="hover"
        >
          <User className="mr-2 inline-block h-4 w-4" />
          About Me
        </Link>
      </motion.li>
      <motion.li className="text-center font-bold" variants={item}>
        <Link
          href="/projects"
          as={NextLink}
          color="foreground"
          size="lg"
          underline="hover"
        >
          <Code className="mr-2 inline-block h-4 w-4" />
          Projects
        </Link>
      </motion.li>
      <motion.li className="text-center font-bold" variants={item}>
        <Link
          href="/experience"
          as={NextLink}
          color="foreground"
          size="lg"
          underline="hover"
        >
          <Briefcase className="mr-2 inline-block h-4 w-4" />
          Work experience & Education
        </Link>
      </motion.li>
      <motion.li className="text-center font-bold" variants={item}>
        <Link
          href="/contact"
          as={NextLink}
          color="foreground"
          size="lg"
          underline="hover"
        >
          <AtSign className="mr-2 inline-block h-4 w-4" />
          Contact
        </Link>
      </motion.li>
    </motion.ul>
  );
};
