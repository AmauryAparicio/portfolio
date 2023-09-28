"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
      className="flex flex-col items-center justify-between py-24 gap-2"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="font-bold text-center" variants={item}>
        <Link href="/">About Me</Link>
      </motion.li>
      <motion.li className="font-bold text-center" variants={item}>
        <Link href="/">Projects</Link>
      </motion.li>
      <motion.li className="font-bold text-center" variants={item}>
        <Link href="/">Tools and Languages</Link>
      </motion.li>
    </motion.ul>
  );
};
