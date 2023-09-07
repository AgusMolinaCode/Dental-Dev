"use client";
import { Typography } from "@material-tailwind/react";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";

const contrail = Archivo_Black({
  weight: ["400"], // Cambiar a 400
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <div className={contrail.className}>
          <h1 className="text-4xl text-white">.SCMI</h1>
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="https://www.linkedin.com/in/agustin-molina-994635138/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg sm:text-xl hover:text-blue-300 duration-200"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/AgusMolinaCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg sm:text-xl hover:text-blue-300 duration-200"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center text-gray-300 font-normal">
        &copy; 2023 Agustin Molina
      </Typography>
    </footer>
  );
}
