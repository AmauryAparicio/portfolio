"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { MoveLeft } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about-me" className="flex h-full items-center justify-center ">
      <div className="container mx-auto max-w-2xl rounded bg-white bg-opacity-5 p-8 px-4 py-8 shadow-xl drop-shadow-lg backdrop-blur-lg dark:bg-opacity-5">
        <h2 className="mb-8 text-4xl font-semibold">About Me</h2>
        <div className="grid">
          <p className="mb-6 text-lg">
            Hello! I’m Amaury Aparicio, a Senior Web Developer and Tech Lead
            specializing in React and Next.js. With over 6 years of experience,
            I have a passion for creating interactive and innovative websites
            and a commitment to delivering cutting-edge solutions.
          </p>
          <p className="mb-6 text-lg">
            Based remotely, I have had the privilege of leading projects and
            collaborating with diverse teams, setting industry benchmarks and
            fostering innovation. My approach is characterized by a meticulous
            attention to detail, a perpetual learner&apos;s mindset, and a
            collaborative spirit.
          </p>
          <p className="mb-6 text-lg">
            I’m always eager to contribute, innovate, and elevate, all while
            maintaining a humble and teachable approach. Let’s connect and
            explore how we can build something extraordinary together!
          </p>
          <Link
            as={NextLink}
            href="/"
            className="mr-4 flex items-center justify-self-end text-yellow-600"
            underline="hover"
          >
            <MoveLeft className="mr-2 inline-block h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
