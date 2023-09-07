"use client";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";

const contrail = Archivo_Black({
  weight: ["400"], // Cambiar a 400
  subsets: ["latin"],
});

export default function Menu() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <button
        className="hover:text-white duration-300 pl-6 pr-6 py-1 rounded-3xl border font-medium text-xl hover:bg-black border-black"
        onClick={openDrawer}
      >
        Menu
      </button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <div className={contrail.className}>
            <h1 className="text-4xl">.SCMI</h1>
          </div>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className="grid content-center gap-2">
          <Button size="sm" variant="outlined">
            <Link href="#reservas">Reservas</Link>
          </Button>
          <Button size="sm" variant="outlined">
            <Link href="#contact">Contactanos</Link>
          </Button>
          <Button size="sm">
            <Link
              href="https://www.linkedin.com/in/agustin-molina-994635138/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  hover:text-blue-300 duration-200"
            >
              LinkedIn
            </Link>
          </Button>
          <Button size="sm">
            <Link
              href="https://github.com/AgusMolinaCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  hover:text-blue-300 duration-200"
            >
              GitHub
            </Link>
          </Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
