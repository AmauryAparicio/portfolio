"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
      className="flex flex-col items-center justify-between gap-2 py-24"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="text-center font-bold" variants={item}>
        <Link href="/">About Me</Link>
      </motion.li>
      <motion.li className="text-center font-bold" variants={item}>
        <Link href="/">Projects</Link>
      </motion.li>
      <motion.li className="text-center font-bold" variants={item}>
        <Link href="/">Tools and Languages</Link>
      </motion.li>
    </motion.ul>
  );
};
