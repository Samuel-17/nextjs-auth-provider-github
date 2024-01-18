"use client";
import { signIn, useSession } from "next-auth/react";

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  const data = useSession();
  console.log(data);
  return (
    <button
      type="button"
      className="w-20 h-10 bg-blue-500 rounded-full"
      onClick={()=> signIn("github")}
    >
      {label}
    </button>
  );
}
