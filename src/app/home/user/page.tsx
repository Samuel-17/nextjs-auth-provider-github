"use client";

import { useSession } from "next-auth/react";

type User = {
  image: string;
  name: string;
  email: string;
};

//hello world

interface sessionProps {
  expires: string;
  user: User;
}

export default function App() {
  const { data: session } = useSession();
  console.log("Tsting => ", session);
  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="shadown-md w-1/3 h-1/2 border ">
          <div className="w-full flex justify-center p-10">
            <img
              src={session?.user?.image || ""}
              alt={session?.user?.name || ""}
              className="w-20 h-20 rounded-full"
            />
          </div>
          <div className="p-10 gap-20">
            <p>{session?.user?.email}</p>
            <p>{session?.user?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
