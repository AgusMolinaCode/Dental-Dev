import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const contrail = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

export default function MenuAdmin(props) {
  const { data: session } = useSession();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleButtonClick = (component) => {
    props.onButtonClick(component);
    closeDrawer();
  };

  return (
    <React.Fragment>
      <button
        className="hover:text-white duration-300 pl-6 pr-6 py-1 rounded-3xl border font-medium text-xl hover:bg-black border-black absolute right-1 top-2 bg-yellow-100"
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
                <p className="text-lg font-semibold">
                  Hola, {session.user.name}
                </p>
                <img
                  src={session.user.image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt={session.user.name}
                />
              </div>
            </div>
          ) : null}

          <Button
            size="sm"
            variant="outlined"
            className="w-full"
            onClick={() => handleButtonClick(1)}
          >
            Turnos Pendientes
          </Button>
          <Button
            size="sm"
            variant="outlined"
            className="w-full"
            onClick={() => handleButtonClick(2)}
          >
            Turnos Asignados
          </Button>
          <Button
            size="sm"
            variant="outlined"
            className="w-full"
            onClick={() => handleButtonClick(4)}
          >
            Turnos Urgentes
          </Button>
          <Button
            size="sm"
            variant="outlined"
            className="w-full"
            onClick={() => handleButtonClick(3)}
          >
            Doctores
          </Button>
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
          <Link
            href="/"
            className="text-white  hover:text-blue-300 duration-200"
          >
            <Button size="sm" className="bg-blue-800 w-full">
              Home
            </Button>
          </Link>
          {session?.user ? (
            <Link
              href="/"
              className="text-white  hover:text-blue-300 duration-200"
            >
              <Button size="sm" className="bg-red-800 w-full">
                Cerrar Sesion
              </Button>
            </Link>
          ) : null}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
