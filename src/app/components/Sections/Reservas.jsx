import React from "react";
import Form from "../Reservas/Form";

const Reservas = () => {
  return (
    <div  className="flex justify-center mx-auto px-3  max-w-[1000px] pt-10 sm:pt-24">
      <div className="w-full bg-transparent border border-black max-h-[600px] opacity-75 mx-auto rounded-2xl shadow-2xl">
        <h1 className="text-2xl text-center sm:text-start sm:text-5xl font-semibold m-2">Reserva tu turno ahora</h1>
        <Form />
      </div>
    </div>
  );
};

export default Reservas;
