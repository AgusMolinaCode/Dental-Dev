import GoogleSignInButton from "../../../components/UI/GoogleSignInButton";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import { BsFillBackspaceFill } from "react-icons/bs";

const SignInPage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <div className=" bg-gray-200 min-h-screen">
      <div className="mx-auto flex w-full  flex-col px-4">
        <div className="grid sm:grid-cols-3 w-full items-center pt-10">
          <div className="cursor-pointer flex justify-start">
            <Link href="/">
              <BsFillBackspaceFill className="text-xl sm:text-3xl text-gray-900" />
            </Link>
          </div>
          <div className="flex-auto">
            <h1
              className="text-center text-3xl font-medium tracking-tight text-gray-900 "
              style={{ margin: "auto" }}
            >
              Iniciar sesion
            </h1>
          </div>
        </div>
        <h2 className="text-center text-gray-500 max-w-md mx-auto pt-2">
          Actualmente el proyecto no esta configurado por roles de usuario, para
          que puedas visualizar el proyecto sin problemas, inicia sesion con tu
          cuenta de google.
        </h2>
        <div className="mx-auto pt-8">
          <GoogleSignInButton />
        </div>
          <Image
            src="/signdoctor.png"
            width={500}
            height={500}
            className="flex justify-center mx-auto"
            alt="doctor"
          />
      </div>
    </div>
  );
};

export default SignInPage;
