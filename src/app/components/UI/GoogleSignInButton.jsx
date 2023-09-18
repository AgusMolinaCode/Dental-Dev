"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import {FcGoogle} from "react-icons/fc";

const GoogleSignInButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <button
      className="inline-flex items-center justify-center px-4 py-2 hover:shadow-2xl duration-300 hover:bg-black hover:text-white text-xl font-medium rounded-md text-black border border-black"
      onClick={() => signIn("google", { callbackUrl })}
    >
      <FcGoogle className="text-3xl mr-2" />
      Continue with Google
    </button>
  );
};

export default GoogleSignInButton;