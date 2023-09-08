import { Button } from "@react-email/button";
import { Tailwind } from "@react-email/tailwind";
import React from "react";

const Email = ({ firstName }) => {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <h1 className="text-4xl text-center font-bold mb-4">
        Welcome {firstName}!
      </h1>
      <p className="text-lg text-center mb-4">
        Tu mensaje fue recibido exitosamente
      </p>
      {/* <Button
        href="https://example.com"
        className="bg-brand px-3 py-2 font-medium leading-4 text-white"
      >
        Click me
      </Button> */}
    </Tailwind>
  );
};

export default Email;