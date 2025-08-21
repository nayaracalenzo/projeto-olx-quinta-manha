export default function FormAddAnuncio() {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <label className="font-medium">Título anúncio</label>
        <input
          type="text"
          name="titulo"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Preço</label>
        <input
          type="number"
          name="preco"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição curta</label>
        <input
          type="text"
          name="descricaoCurta"
          required
          className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Descrição Completa</label>
        <textarea
          name="descricaoCompleta"
          required
          className="resize-none h-[200px] w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <div>
        <label className="font-medium">Link da imagem</label>
        <input
          type="text"
          name="img"
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
