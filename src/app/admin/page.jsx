"use client";
import React, { useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import NoReservado from "../components/AdminComponents/NoReservado";
import Reservados from "../components/AdminComponents/Reservados";
import Doctores from "../components/AdminComponents/Doctores";
import Urgencias from "../components/AdminComponents/Urgencias";

function Page() {
  const [componentToShow, setComponentToShow] = useState(null);

  const handleButtonClick = (component) => {
    switch (component) {
      case 1:
        setComponentToShow(<NoReservado />);
        break;
      case 2:
        setComponentToShow(<Reservados />);
        break;
      case 3:
        setComponentToShow(<Doctores />);
        break;
      case 4:
        setComponentToShow(<Urgencias />);
        break;
      default:
        setComponentToShow(null);
        break;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="">
        <Sidebar onButtonClick={handleButtonClick} />
      </div>

      <div className="flex-1 overflow-y-scroll" style={{ maxHeight: "100vh" }}>
        <div>{componentToShow}</div>
      </div>
    </div>
  );
}

export default Page;
