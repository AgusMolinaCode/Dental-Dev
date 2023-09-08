import Navbar from "./components/Sections/Navbar";
import "./globals.css";
import { Phudu } from "next/font/google";

const phudu = Phudu({ subsets: ["latin"] });

export const metadata = {
  title: "Dental-Dev",
  description: "Aplicacion de gestion de clinicas dentales - Dental-Dev ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={phudu.className}>
        <div className="bg-gray-50">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
