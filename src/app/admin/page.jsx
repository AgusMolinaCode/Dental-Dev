'use client';
import React, { useState, useEffect } from "react";
import ReservaCard from "../components/Reservas/ReservaCard";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchReservas() {
      const res = await fetch("/api/reservas");
      const data = await res.json();
      setReservas(data);
      router.refresh();
    }
    fetchReservas();
  }, []);

  const handleReservaDelete = (reservaId) => {
    const filteredReservas = reservas.filter(
      (reserva) => reserva._id !== reservaId
    );
    setReservas(filteredReservas);
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold underline py-8">
        Reservas
      </h1>
      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {reservas.map((reserva) => {
          const simpleReserva = JSON.parse(JSON.stringify(reserva));
          return (
            <ReservaCard
              key={reserva._id}
              reserva={simpleReserva}
              onReservaDelete={handleReservaDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Page;