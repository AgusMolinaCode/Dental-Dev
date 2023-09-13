'use client';
import React, { useState } from "react";

const ReservaCard = ({ reserva, onReservaDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await fetch(`/api/reservas/${reserva._id}`, {
        method: "DELETE",
      });
      onReservaDelete(reserva._id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-10 bg-gray-500">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
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