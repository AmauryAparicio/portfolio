"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/react";
import { MoveLeft } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="container mx-auto max-w-2xl bg-white bg-opacity-5 p-8 px-4 py-8 text-center shadow-xl drop-shadow-lg backdrop-blur-lg">
        <h2 className="mb-8 text-4xl font-semibold">Contact Me</h2>
        <div className="mb-6">
          <p className="mb-2 text-lg">
            Feel free to reach out to me through any of the following:
          </p>
          <p className="text-lg">
            <span className="font-semibold">Email:</span>{" "}
            <Link
              href="mailto:amaurysunstar@gmail.com"
              className="text-yellow-600"
              underline="hover"
            >
              amaurysunstar@gmail.com
            </Link>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span> +52 55-43-69-43-53
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          <Link
            href="https://www.linkedin.com/in/amauryaparicio/?locale=en_US"
            isExternal
            showAnchorIcon
            className="text-yellow-600"
            underline="hover"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/AmauryAparicio"
            isExternal
            showAnchorIcon
            className="text-yellow-600"
            underline="hover"
          >
            GitHub
          </Link>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Link
            as={NextLink}
            href="/"
            underline="hover"
            className="flex items-center text-yellow-600"
          >
            <MoveLeft className="mr-2 inline-block h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
