"use client";
import React, { useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDay } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [enviado, setEnviado] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState();
  const [turnoSeleccionado, setTurnoSeleccionado] = useState("");
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const handleChangeEspecialidad = (e) => {
    setEspecialidadSeleccionada(e);
  };

  function handleTurnoChange(e) {
    setTurnoSeleccionado(e);
  }

  const notify = () =>
    toast.success(
      "Reserva enviada correctamente, nos pondremos en contacto con usted a la brevedad."
    );

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.nombre.value;
    const email = event.target.elements.email.value;
    const whatsapp = event.target.elements.whatsapp.value;
    const especialidad = especialidadSeleccionada;
    const turno = turnoSeleccionado;
    const fecha1 = fechaSeleccionada;
    if (fecha1.getDay() === 0 || fecha1.getDay() === 6) {
      toast.error("Por favor seleccione una fecha entre lunes y viernes.");
      return;
    }
    const fecha = fecha1.toISOString().slice(0, 10);
    const datos = { name, email, whatsapp, especialidad, turno, fecha };
    console.log(datos);
    setEnviado(true);
    setMensajeEnviado(true);
    notify();
    await crearReserva(datos);
    event.target.reset();
  }

  const crearReserva = async (datos) => {
    const res = await fetch("/api/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    console.log(res);
  };

  const filterDate = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const fechaMinima = new Date();

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="m-1 sm:m-4 grid md:grid-cols-2 gap-4 lg:justify-center lg:items-center">
        <div className="">
          <label htmlFor="nombre">Nombre completo</label>
          <Input id="nombre" name="nombre" size="lg" required />
        </div>
        <div className="">
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" size="lg" required />
        </div>
        <div className="">
          <label htmlFor="whatsapp">Whatsapp</label>
          <Input
            id="whatsapp"
            name="whatsapp"
            size="lg"
            type="number"
            required
          />
        </div>
        <div className="">
          <label htmlFor="especialidad">Especialidad</label>
          <Select
            id="especialidad"
            size="lg"
            name="especialidad"
            value={especialidadSeleccionada}
            onChange={handleChangeEspecialidad}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            className="text-black"
            placeholder="Especialidad"
          >
            <Option value="urgencia">URGENCIAS</Option>
            <Option value="otro">Otro - Consulta</Option>
            <Option value="periodoncia">Periodoncia</Option>
            <Option value="cirugia">Cirugía Oral y Maxilofacial</Option>
            <Option value="odontopediatria">Odontopediatría</Option>
            <Option value="cosmetica">Odontología Cosmética</Option>
            <Option value="ortodoncia">Ortodoncia</Option>
          </Select>
        </div>
        <div className="">
          <label htmlFor="turno">Turno</label>
          <Select
            id="turno"
            size="lg"
            name="turno"
            value={turnoSeleccionado}
            onChange={handleTurnoChange}
            className="text-black"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            placeholder="Turno"
          >
            <Option value="mañana">Mañana</Option>
            <Option value="tarde">Tarde</Option>
          </Select>
        </div>
      </div>
      <div className="flex justify-center mx-auto max-w-[350px] py-2 px-2">
        <button
          type="submit"
          className="w-full h-10 px-3 bg-deep-orange-300 hover:bg-deep-orange-400 hover:shadow-2xl duration-200 font-medium text-base placeholder-gray-600 border rounded-lg focus:shadow-outline "
        >
          Reservar
        </button>
        <div>
          <Toaster
            position="top-center"
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "bg-black text-white font-bold text-lg",
              duration: 4000,
              style: {
                background: "#000",
                color: "#fff",
              },
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
