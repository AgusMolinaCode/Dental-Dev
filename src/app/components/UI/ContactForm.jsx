
import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.elements.nombre.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    const datos = { nombre, email, message };
    console.log(datos);
    setEnviado(true);
    setMensajeEnviado(true);
    setTimeout(() => {
        setMensajeEnviado(false);
    }, 3200);
    event.target.reset();
  };

  return (
    <Card color="transparent" shadow={false} className="px-2">
      <Typography variant="h4" color="blue-gray">
        Contactenos
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Complete el formulario para contactarnos
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Nombre" name="nombre" pattern="[a-zA-Z]{4,}" required />
          <Input size="lg" label="Email" type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
          <Textarea label="Message" name="message" pattern=".{4,}" required />
        </div>
        {enviado ? (
          <Button className="mt-6" type="submit" fullWidth>
            Enviar otro mensaje
          </Button>
        ) : (
          <Button className="mt-6" type="submit" fullWidth>
            Enviar
          </Button>
        )}
        {mensajeEnviado && <Typography className="mt-2 bg-green-300 p-1 sm:p-2 text-black text-center font-bold uppercase rounded-lg">Mensaje enviado</Typography>}
      </form>
    </Card>
  );
}