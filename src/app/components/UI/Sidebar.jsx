"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, List, ListItem, ListItemPrefix,Button } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Archivo_Black } from "next/font/google";
import { signIn, useSession, signOut } from "next-auth/react";

const contrail = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Sidebar({ onButtonClick }) {
  const { data: session } = useSession();
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (value) => setSelected(value);

  useEffect(() => {
    onButtonClick(1);
  }, []);

  const handleClick = (component) => {
    setSelectedItem(component);
    onButtonClick(component);
  };

  return (
    <Card className="min-h-full max-w-[16rem] rounded-none p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <div className={contrail.className}>
          <Link href="/">
            <h1 className="text-4xl text-blue-900 hover:text-blue-800 duration-300">
              .SCMI
            </h1>
          </Link>
          <h1 className=" text-lg font-bold underline">
            Panel de Administración
          </h1>
        </div>
      </div>
      <List>
        {session?.user ? (
          <div>
            <div className="flex items-center gap-2 mb-2 justify-center">
              <p className="text-md font-semibold">Hola, {session.user.name}</p>
              <img
                src={session.user.image}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
        ) : null}

        <ListItem
          className="font-bold"
          selected={selected === 1}
          onClick={() => handleClick(1)}
        >
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Turnos Pendientes
        </ListItem>

        <ListItem
          className="font-bold"
          selected={selected === 2}
          onClick={() => handleClick(2)}
        >
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Turnos Asignados
        </ListItem>
        <ListItem
          className="font-bold"
          selected={selected === 4}
          onClick={() => handleClick(4)}
        >
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Urgencias
        </ListItem>
        <ListItem
          className="font-bold"
          selected={selected === 3}
          onClick={() => handleClick(3)}
        >
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Doctores
        </ListItem>
        {session?.user ? (
          <ListItem className="font-bold">
            
            <Button
              size="sm"
              onClick={async () => {
                await signOut({
                  callbackUrl: "/",
                });
              }}
              className="w-full bg-gray-800 hover:bg-black duration-300"
            >
              Cerrar Sesion
            </Button>
          </ListItem>
        ) : null}
      </List>
    </Card>
  );
}
