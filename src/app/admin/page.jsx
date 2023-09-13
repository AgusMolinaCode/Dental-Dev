import React from "react";
import { connectDB } from "../../utils/mongoose";
import Reserva from "../../models/Reserva";
import ReservaCard from "../components/Reservas/ReservaCard";

async function getReservas() {
  await connectDB();
  const reservas = await Reserva.find();
  return reservas;
}

async function page() {
  const reservas = await getReservas();

  return (
    <div>
      <h1 className="text-center text-4xl font-bold underline py-8">
        Reservas
      </h1>
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {reservas.map((reserva) => {
          const simpleReserva = JSON.parse(JSON.stringify(reserva));
          return <ReservaCard key={reserva._id} reserva={simpleReserva} />;
        })}
      </div>
    </div>
  );
}

export default page;
