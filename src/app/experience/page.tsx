"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";

const ExperienceAndEducation = () => {
  const workExperienceData = [
    {
      role: "Senior Front-End Developer / Tech Lead",
      company: "Particle",
      location: "Remote",
      duration: "Jun/22 - Jan/23",
      responsibilities: [
        "Pioneered an IoT app, setting industry benchmarks.",
        "Mentored developers; fostered innovation and best practices.",
        "Collaborated globally, ensuring seamless integrations.",
        "Devised tech strategies aligned with business goals.",
      ],
    },
    {
      role: "Senior Web Developer / Tech Lead",
      company: "ArkusNexus",
      location: "Remote",
      duration: "Sep/21 - May/22",
      responsibilities: [
        "Helmed projects, boosting business growth.",
        "Championed monorepositories; enhanced productivity.",
        "Influenced product trajectories and technical excellence.",
      ],
    },
    {
      role: "Senior Front-End Developer",
      company: "Smart Payment Services",
      location: "Mexico City",
      duration: "Feb/21 - Aug/21",
      responsibilities: [
        "Trailblazed UI/UX for an online payment gateway.",
        "Collaborated closely with backend teams.",
        "Pivotal in company's technological modernization.",
      ],
    },
    {
      role: "Front-End Developer",
      company: "TAAG Genetics",
      location: "Remote",
      duration: "Oct/20 - Jan/21",
      responsibilities: [
        "Championed enhancements to warehouse and lab management software.",
        "Collaborated with top stakeholders; delivered excellence.",
      ],
    },
    {
      role: "Junior Fullstack Developer",
      company: "TS Plus",
      location: "Not Specified",
      duration: "Oct/17 - May/18",
      responsibilities: [
        "Revamped an online store for remote server management software.",
        "Assisted in transitioning to a modern tech stack.",
        "Collaborated, optimizing store operations and user interactions.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Not Specified",
      duration: "Feb/17 - Present",
      responsibilities: [
        "Crafted bespoke web solutions; exceeded client expectations.",
        "Collaborated globally; delivered innovative web experiences.",
        "Stayed updated with industry trends.",
      ],
    },
  ];

  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Universidad Nacional Autónoma de México",
      location: "Mexico City",
      duration: "2019 - Present (Expected Graduation: 2024)",
    },
  ];

  return (
    <section id="experience-and-education" className="py-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="mb-12 flex items-center">
            <motion.h2
              className="text-4xl font-semibold"
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
            >
              Work Experience
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
          {workExperienceData.map((experience, index) => (
            <motion.div
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
              key={index}
              className="mb-12 rounded bg-white bg-opacity-10 p-8 px-4 py-8 shadow-lg drop-shadow-lg backdrop-blur-lg"
            >
              <h3 className="mb-2 text-2xl font-semibold">{experience.role}</h3>
              <p className="mb-2 text-lg">
                {experience.company}, {experience.location}
              </p>
              <p className="mb-4 text-lg">{experience.duration}</p>
              <ul className="list-disc pl-5">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="mb-2 text-lg">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.h2
            className="mb-12 text-4xl font-semibold"
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
            Education
          </motion.h2>
          {educationData.map((education, index) => (
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
              <h3 className="mb-2 text-2xl font-semibold">
                {education.degree}
              </h3>
              <p className="mb-2 text-lg">
                {education.institution}, {education.location}
              </p>
              <p className="mb-4 text-lg">{education.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
