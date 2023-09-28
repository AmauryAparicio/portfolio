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

const links = [
  {
    href: "/about",
    text: "About Me",
    icon: <User className="mr-2 inline-block h-4 w-4" />,
  },
  {
    href: "/projects",
    text: "Projects",
    icon: <Code className="mr-2 inline-block h-4 w-4" />,
  },
  {
    href: "/experience",
    text: "Work experience & Education",
    icon: <Briefcase className="mr-2 inline-block h-4 w-4" />,
  },
  {
    href: "/contact",
    text: "Contact",
    icon: <AtSign className="mr-2 inline-block h-4 w-4" />,
  },
];

export const Links = () => {
  return (
    <motion.ul
      className="flex flex-col items-center justify-between gap-2 md:py-14 lg:py-24"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      {links.map((link, index) => (
        <motion.li
          className="text-center font-bold"
          variants={item}
          key={`${link.href}-${index}`}
        >
          <Link
            href={link.href}
            as={NextLink}
            className="transition-colors hover:text-amber-500"
            size="lg"
            underline="hover"
            color="foreground"
          >
            {link.icon}
            {link.text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};
