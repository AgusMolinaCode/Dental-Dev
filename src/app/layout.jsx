import "./globals.css";
import { Phudu } from "next/font/google";

const phudu = Phudu({ subsets: ["latin"] });

export const metadata = {
  title: "Cuidado dental de calidad en tu ciudad | Somos tu clínica dental de confianza",
  description:
    "En nuestra clínica dental ofrecemos servicios de alta calidad para el cuidado de tus dientes y encías. Reserva tu cita hoy mismo y descubre por qué somos la mejor opción para tu salud dental.",
  keywords: [
    "cuidado dental",
    "clínica dental",
    "odontología",
    "salud dental",
    "reserva de citas",
    "tratamientos dentales",
    "blanqueamiento dental",
    "ortodoncia",
    "implantes dentales",
    "endodoncia",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={phudu.className}>
        <div className="bg-gray-50">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
