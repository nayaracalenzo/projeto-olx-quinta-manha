import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 ">
      <div className="max-w-sm w-full text-gray-600 space-y-8">
        <div className="text-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Faça login da sua conta
            </h3>
            <p className="">
              Não possui uma conta?{" "}
              <Link
                to={"/cadastro"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Faça o cadastro
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Senha</label>
            <input
              type="password"
              name="senha"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Entrar
          </button>
        </form>

        <div className="text-center">
          <a
            href="javascript:void(0)"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Esqueceu senha?
          </a>
        </div>
      </div>
    </main>
  );
}
