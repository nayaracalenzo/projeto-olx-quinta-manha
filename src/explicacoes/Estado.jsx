import { useState } from "react";

export default function Estado() {
  const [meuNome, setMeuNome] = useState("Rodrigo");

  function handleTrocarNome() {
    setMeuNome("Nayara");
  }

  return (
    <div>
      <h1>{meuNome}</h1>
      <button
        onClick={handleTrocarNome}
        className="bg-green-400 px-6 py-2 mt-3"
      >
        Trocar Nome
      </button>
    </div>
  );
}
