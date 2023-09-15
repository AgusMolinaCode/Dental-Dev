"use client";
import React, { useState, useEffect } from "react";
import ReservaCard from "../Reservas/ReservaCard";
import { Spinner } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const Reservados = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchReservas() {
      const res = await fetch("/api/reservas");
      const data = await res.json();

      setReservas(data);
      setIsLoading(false);
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

  const handleReservaEdit = (updatedReserva) => {
    const updatedReservas = reservas.map((reserva) => {
      if (reserva._id === updatedReserva._id) {
        return updatedReserva;
      }
      return reserva;
    });
    setReservas(updatedReservas);
  };

  const filteredReservas = reservas.filter((reserva) => reserva.reservado);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner className="h-8 sm:h-16 w-8 sm:w-16" />
        </div>
      ) : (
        <div className="px-2">
          <h1 className="text-3xl font-bold underline py-8">
            Turnos Confirmados
          </h1>
          <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {filteredReservas.map((reserva) => {
              const simpleReserva = JSON.parse(JSON.stringify(reserva));
              return (
                <ReservaCard
                  key={reserva._id}
                  reserva={simpleReserva}
                  onReservaDelete={handleReservaDelete}
                  onReservaEdit={handleReservaEdit}
                  bgColor="bg-[#dbe9e9]"
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservados;
