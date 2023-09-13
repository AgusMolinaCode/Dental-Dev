import { Archivo_Black } from "next/font/google";
import Menu from "../UI/Menu";
import Link from "next/link";

const contrail = Archivo_Black({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 pt-2">
        <div className="flex gap-1 items-center">
          <div className={contrail.className}>
            <Link href="/">
              <h1 className="text-4xl">.SCMI</h1>
            </Link>
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
