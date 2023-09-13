"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ReservaCard = ({ reserva }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://dental-dev.vercel.app/api/reservas/${reserva._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      router.refresh();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 bg-gray-500">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
      <h2>{reserva.name}</h2>
      <p>{reserva.email}</p>
      <p>{reserva.whatsapp}</p>
      <p>{reserva.especialidad}</p>
      <p>{reserva.turno}</p>
      <p>{reserva.fecha}</p>
    </div>
  );
};

export default ReservaCard;
