import { useContext, useEffect, useState } from "react";
import { AnuncioContext } from "../context/AnuncioContext";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../utils/baseURL";

export default function Detalhes() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [form, setForm] = useState({
    titulo: "",
    preco: "",
    descricaoCurta: "",
    descricaoCompleta: "",
    imagem: ""
  })

  const {anuncioSelecionado} = useContext(AnuncioContext)
  console.log("anuncio selecionado:", anuncioSelecionado)

  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];

  useEffect(() => {
    if (anuncioSelecionado) {
      setForm({
        titulo: anuncioSelecionado.titulo || "",
        preco: anuncioSelecionado.preco ||"",
        descricaoCurta: anuncioSelecionado.descricaoCurta || "",
        descricaoCompleta: anuncioSelecionado.descricaoCompleta || "",
        imagem: anuncioSelecionado.imagem || ""
      })
    }
  }, [anuncioSelecionado])


   function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit (e) {

    e.preventDefault()
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await fetch(`${baseURL}/anuncios/updateMyAnuncio/${id}?userId=${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...form,
            preco: Number(form.preco),
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Erro ao atualizar anúncio")
      }

      const data = await response.json()
      console.log("Anuncio Atualizado com sucesso", data)
      navigate("/dashboard")

    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <div className="h-full flex items-center justify-center">
          <img
            src={
              form.imagem
            }
            loading="lazy"
            alt="foto anúncio"
            className="rounded-lg w-[500px]"
          />
        </div>
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Editar anúncio
            </h3>
            <p className="mt-3">Edite seus anúncios</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 mt-12 lg:pb-12"
          >
            <div>
              <label className="font-medium">Titulo do anúncio</label>
              
              <input
                type="text"
                required
                name="titulo"
                value={form.titulo}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Preço</label>
              <input
                type="number"
                required
                name="preco"
                value={form.preco}
                onChange={handleChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição curta</label>
              <input
                type="text"
                name="descricaoCurta"
                required
                onChange={handleChange}
                value={form.descricaoCurta}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Descrição Completa</label>
              <textarea
                required
                name="descricaoCompleta"
                value={form.descricaoCompleta}
                onChange={handleChange}
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              ></textarea>
            </div>

            <div>
              <label className="font-medium">Link da imagem</label>
              <input
                type="text"
                name="imagem"
                onChange={handleChange}
                value={form.imagem}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              Editar anúncio
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
