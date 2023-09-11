"use client";
import React, { useState } from "react";
import { Input, Select, Option } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isAfter, getDay } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
  const [enviado, setEnviado] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState();
  const [turnoSeleccionado, setTurnoSeleccionado] = useState("");
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const handleChange = (e) => {
    setEspecialidadSeleccionada(e);
  };

  function handleTurnoChange(e) {
    setTurnoSeleccionado(e);
  }
  const notify = () =>
    toast.success(
      "Reserva enviada correctamente, nos pondremos en contacto con usted a la brevedad."
    );

  function handleSubmit(event) {
    event.preventDefault();
    const nombre = event.target.elements.nombre.value;
    const email = event.target.elements.email.value;
    const especialidad = especialidadSeleccionada;
    const turno = turnoSeleccionado;
    const fecha = fechaSeleccionada;

    if (fecha.getDay() === 0 || fecha.getDay() === 6) {
      toast.error("Por favor seleccione una fecha entre lunes y viernes.");
      return;
    }

    const date = fecha.toISOString().slice(0, 10);
    const datos = { nombre, email, especialidad, date, turno };
    console.log(datos);
    setEnviado(true);
    setMensajeEnviado(true);
    notify();
  }

  const filterDate = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const fechaMinima = new Date();

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="m-1 sm:m-4 grid md:grid-cols-2 gap-4 lg:justify-center lg:items-center">
        <div className="">
          <Input label="Nombre completo" name="nombre" size="lg" required />
        </div>
        <div className="">
          <Input label="Email" name="email" size="lg" required />
        </div>
        <div className="">
          <Input
            label="Whatsapp"
            name="email"
            size="lg"
            type="number"
            required
          />
        </div>
        <div className="">
          <Select
            label="Especialidad"
            size="lg"
            name="especialidad"
            value={especialidadSeleccionada}
            onChange={handleChange}
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            className="text-black"
          >
            <Option value="periodoncia">Periodoncia</Option>
            <Option value="cirugia">Cirugía Oral y Maxilofacial</Option>
            <Option value="odontopediatria">Odontopediatría</Option>
            <Option value="cosmetica">Odontología Cosmética</Option>
            <Option value="ortodoncia">Ortodoncia</Option>
            <Option value="otro">Otro</Option>
          </Select>
        </div>
        <div className="">
          <DatePicker
            selected={fechaSeleccionada}
            onChange={(date) => setFechaSeleccionada(date)}
            filterDate={filterDate}
            minDate={fechaMinima}
            className="w-full h-11 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            placeholderText="Fecha"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="">
          <Select
            label="Turno"
            size="lg"
            name="turno"
            value={turnoSeleccionado}
            onChange={handleTurnoChange}
            className="text-black"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
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
