import { useState } from "react";

export default function CondicaoEstado() {
  const [controlandoTexto, setControlandoTexto] = useState(true);

  function handleTrocaTextoPara1() {
    setControlandoTexto(true);
  }

  function handleTrocaTextoPara2() {
    setControlandoTexto(false);
  }

  return (
    <div>
      {controlandoTexto === true ? (
        <h1>Meu texto 01</h1>
      ) : (
        <h1>Meu texto 02</h1>
      )}

      <button onClick={handleTrocaTextoPara1}>Componente 01</button>
      <button onClick={handleTrocaTextoPara2}>Componente 02</button>
    </div>
  );
}
