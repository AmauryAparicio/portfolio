"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";

export default function Projects() {
  const projectData = [
    {
      title: "Artesandia",
      description:
        "Artesandia is an E-commerce site with an administration system featuring automated systems for managing sales and customers.",
      technologies:
        "TypeScript, React, Next.js, tRPC, Prisma, PostgreSQL, Sass, and Turborepo.",
      link: "https://www.artesandia.mx",
      imageUrl: "/artesandia.png",
    },
    {
      title: "Natours",
      description:
        "Natours is a project created to demonstrate the ability to replicate a design using different CSS techniques.",
      technologies: "Pure HTML and Scss.",
      link: "https://amauryaparicio.github.io/Natours/",
      imageUrl: "/natours.png",
    },
    {
      title: "Particle Device Setup",
      description:
        "Setup Particle device is an application that allows users to setup their Particle devices.",
      technologies: "Next.js, Redux, Sass and internal libraries.",
      link: "https://setup.particle.io/",
      imageUrl: "/particle.png",
    },
  ];

  return (
    <section id="projects" className="px-4 py-8 md:py-16 lg:px-0">
      <div className="container mx-auto">
        <div className="mb-12 flex items-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="text-4xl font-semibold"
          >
            Projects
          </motion.h2>
          <Link
            as={NextLink}
            href="/"
            underline="hover"
            className="ml-auto flex items-center text-yellow-600"
          >
            <MoveLeft className="mr-2 inline-block h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="mb-12 rounded bg-white bg-opacity-10 p-8 px-4 py-8 shadow-lg drop-shadow-lg backdrop-blur-lg"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              className="mb-6 h-64 w-full rounded-md object-cover object-top"
              as={NextImage}
              width={2822}
              height={2024}
            />
            <h3 className="mb-4 text-2xl font-semibold ">{project.title}</h3>
            <p className="mb-4 text-lg">{project.description}</p>
            <p className="mb-4 text-lg">
              Technologies Used: {project.technologies}
            </p>
            <Link
              href={project.link}
              showAnchorIcon
              isExternal
              underline="hover"
              className="text-yellow-600"
            >
              Link to Project
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
