"use client";
import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

const contrail = Archivo_Black({
  weight: ["400"], // Cambiar a 400
  subsets: ["latin"],
});

export default function Menu() {
  const { data: session } = useSession();
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
          <Link href="/">
            <div className={contrail.className}>
              <h1 className="text-4xl">.SCMI</h1>
            </div>
          </Link>
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
          {session?.user ? (
            <div>
              <div className="flex items-center gap-2 mb-2 justify-center">
                <p className="text-lg font-semibold">Hola, {session.user.name}</p>
                <Image
                  src={session.user.image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt={session.user.name}
                />
              </div>
              <Button
                size="sm"
                className="bg-blue-800 mb-2 w-full"
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  });
                }}
              >
                Cerrar Sesion
              </Button>
              <Link
                href="/admin"
                className="text-white  hover:text-blue-300 py-2 duration-200"
              >
                <Button size="sm" className="bg-blue-800 w-full">
                  Admin
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              size="sm"
              className="bg-blue-800 w-full"
              onClick={() => signIn()}
            >
              Ingresar
            </Button>
          )}
          <Link href="#reservas">
            <Button size="sm" variant="outlined" className="w-full">
              Reservas
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="sm" variant="outlined" className="w-full">
              Contactanos
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/agustin-molina-994635138/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  hover:text-blue-300 duration-200"
          >
            <Button size="sm" className="w-full">
              LinkedIn
            </Button>
          </Link>
          <Link
            href="https://github.com/AgusMolinaCode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  hover:text-blue-300 duration-200"
          >
            <Button size="sm" className="w-full">
              GitHub
            </Button>
          </Link>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
