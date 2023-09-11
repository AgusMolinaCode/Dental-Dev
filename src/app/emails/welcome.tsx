import { Tailwind } from "@react-email/tailwind";
import React from "react";
import {
  Body,
  Button,
  Font,
  Head,
  Heading,
  Html,
  Text,
  Img,
} from "@react-email/components";

const baseUrl = `https://img.freepik.com/foto-gratis/primer-plano-atractiva-joven-sonriente-senalando-dedo-cara-metiendo-mejillas-fondo-blanco_1258-122149.jpg?w=1480&t=st=1694223227~exp=1694223827~hmac=0cfdf1e4bc121432c2d3fa1f8ed03f9c6de2dc1790c10d07a69fe1281d219f20`;

const Email = ({ firstName }) => {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Heading className="text-center text-4xl font-bold text-gray-800">
            Hola {firstName}!
          </Heading>
          <p className="text-center text-gray-600 text-lg">
            Gracias por contactarte con nosotros. En breve nos pondremos en
            contacto con usted.
          </p>
          <div className="mx-auto flex justify-center pb-10">
            <Img src={baseUrl} alt="Dentist" width="600" height="300" />
          </div>
          <Button
            href="https://dental-dev.vercel.app/"
            className=" flex justify-center mx-auto"
          >
            <span className="bg-blue-400 p-2 rounded-xl font-bold text-white">
              Click Me
            </span>
          </Button>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
