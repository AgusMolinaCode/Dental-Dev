"use client";
import React from "react";
import { Input, Select, Option } from "@material-tailwind/react";

const Form = () => {
  return (
    <div className="m-1 sm:m-4 grid lg:flex gap-4 lg:justify-center lg:items-center">
      <div className="">
        <Input label="Nombre completo" size="lg" />
      </div>
      <div className="">
        <Input label="Email" size="lg" />
      </div>
      <div className="">
        <Select label="Select Version" size="lg">
          <Option>Periodoncia</Option>
          <Option>Cirugía Oral y Maxilofacial</Option>
          <Option>Odontopediatría</Option>
          <Option>Odontología Cosmética</Option>
          <Option>Ortodoncia</Option>
        </Select>
      </div>
      <div className="">
        <input
          type="date"
          className="w-full h-11 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          placeholder="Fecha"
        />
      </div>
      <div className="">
        <button className="w-full h-10 px-3 bg-deep-orange-300 hover:bg-deep-orange-400 hover:shadow-2xl duration-200 font-medium text-base placeholder-gray-600 border rounded-lg focus:shadow-outline">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default Form;
