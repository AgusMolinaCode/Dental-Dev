import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

const ReservaCard = ({ reserva, onReservaDelete, onReservaEdit, bgColor }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEdit = async () => {
    setIsEditing(true);
    try {
      await fetch(`/api/reservas/${reserva._id}`, {
        method: "PUT",
        body: JSON.stringify({ reservado: !reserva.reservado }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      onReservaEdit({ ...reserva, reservado: !reserva.reservado });
    } catch (error) {
      console.log(error);
    } finally {
      setIsEditing(false);
    }
  };

  const fecha = new Date(reserva.fecha);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  return (
    <div
      className={`p-3 border border-black shadow-xl rounded-2xl ${bgColor} ${
        reserva.especialidad === "urgencia" && "bg-[#f8bcbc]"
      }`}
    >
      <h2 className="font bold sm:text-md md:text-xl text-gray-700 font-medium py-1">
        <span className="text-sm font-medium">Nombre:</span> {reserva.name}
      </h2>
      <p className="font bold sm:text-md md:text-xl text-gray-700 font-medium py-1">
        <span className="text-sm font-medium">Email:</span> {reserva.email}
      </p>
      <p className="font bold sm:text-md md:text-xl text-gray-700 font-medium py-1">
        <span className="text-sm font-medium">Whatsapp:</span>{" "}
        {reserva.whatsapp}
      </p>
      <p className="font bold sm:text-md md:text-xl text-gray-700 font-medium py-1">
        <span className="text-sm font-medium">Especialidad:</span>{" "}
        {reserva.especialidad}
      </p>
      <p className="font bold sm:text-md md:text-xl text-gray-700 font-medium py-1">
        <span className="text-sm font-medium">Turno:</span> {reserva.turno}
      </p>
      <p className="font bold sm:text-md md:text-xl text-gray-700 font-medium py-1">
        <span className="text-sm font-medium">Fecha:</span> {dia}/{mes}/{anio}
      </p>

      <div className="flex mx-auto flex-wrap gap-2 py-2">
        <Button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          color="red"
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>

        {reserva.reservado ? null : (
          <Button
            className="bg-green-500"
            type="button"
            onClick={handleEdit}
            disabled={isEditing}
          >
            {isEditing ? "Updating..." : "Confirmar Reserva"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ReservaCard;
