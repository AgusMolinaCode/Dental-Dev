import { Archivo_Black } from "next/font/google";
import Menu from "../UI/Menu";

const contrail = Archivo_Black({
  weight: ["400"], // Cambiar a 400
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 pt-2">
        <div className="flex gap-1 items-center">
          <div className={contrail.className}>
            <h1 className="text-4xl">.SCMI</h1>
          </div>
        </div>
        <div>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
