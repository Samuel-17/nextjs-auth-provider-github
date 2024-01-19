"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/home/user");
    }
  }, [session]);

  function handleProvider() {
    signIn("github");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="shadow-md rounded w-1/3 h-1/2 p-8 flex flex-col items-center justify-center space-y-4">
        {/* Logo no centro */}
        <img
          width={50}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfe7agSeFr_kfMPAdpo3QqbQiD5Wju974fWXHNyA4CIQK4XtqfF5wZAM5Q-aOPQ4hjB6k&usqp=CAU"
          alt="Logo"
          className="mb-4"
        />

        {/* Título de login */}
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        {/* Campos do formulário */}
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-6 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        {/* Botão de login com GitHub */}
        <button
          className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={() => signIn("github")}
        >
          Sign In with GitHub
        </button>

        {/* Ícone do GitHub */}
        <div className="mt-2">
          <a href="#">
            <img
              src="https://banner2.cleanpng.com/20180824/jtl/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b0bac53.1999041115351082030478.jpg"
              alt="GitHub Icon"
              className="w-20"
              onClick={handleProvider}
            />
          </a>
        </div>

        {/* Link "Esqueci minha senha" */}
        <a
          className="inline-block align-baseline font-bold text-sm text-violet-600 hover:text-violet-800 mt-4"
          href="#"
        >
          Esqueci minha senha
        </a>
      </form>
    </div>
  );
}
