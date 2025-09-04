import { useState } from "react";
import { baseURL } from "../utils/baseURL.js";
import { toast } from "react-toastify";

export default function FormAddAnuncio({ setOpen }) {
  const [dataAnuncio, setDataAnuncio] = useState({
    titulo: "",
    preco: "",
    descricaoCurta: "",
    descricaoCompleta: "",
    imagem: "",
  });

  function handleChangeInputsAddAnuncio(event) {
    const { name, value } = event.target;

    setDataAnuncio((prevDataAnuncio) => {
      return { ...prevDataAnuncio, [name]: value };
    });
  }

  async function handleSubmitAddAnuncio(event) {
    event.preventDefault();

    console.log(dataAnuncio);

    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await fetch(
        `${baseURL}/anuncios/addNewAnuncio?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...dataAnuncio,
            preco: Number(dataAnuncio.preco),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Anúncio criado com sucesso");
        //fechar o drawer
        setOpen(false);
        // fazer o get dos anuncios
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmitAddAnuncio} className="flex flex-col gap-3">
      <div>
        <label className="font-medium">Título anúncio</label>
        <input
          type="text"
          name="titulo"
          onChange={handleChangeInputsAddAnuncio}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Preço</label>
        <input
          type="number"
          name="preco"
          onChange={handleChangeInputsAddAnuncio}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição curta</label>
        <input
          type="text"
          name="descricaoCurta"
          onChange={handleChangeInputsAddAnuncio}
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição Completa</label>
        <textarea
          name="descricaoCompleta"
          onChange={handleChangeInputsAddAnuncio}
          required
          className="resize-none h-[200px] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <div>
        <label className="font-medium">Link da imagem</label>
        <input
          type="text"
          onChange={handleChangeInputsAddAnuncio}
          name="imagem"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
      >
        Adicionar anúncio
      </button>

      <button
        type="button"
        className="border-2 border-gray-500 text-black w-full px-4 py-2 font-medium bg-white hover:bg-[#cccccc] rounded-lg duration-150"
      >
        Cancelar
      </button>
    </form>
  );
}
