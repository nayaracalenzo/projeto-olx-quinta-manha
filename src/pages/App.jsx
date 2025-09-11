import { useEffect, useState } from "react";
import BodyList from "../components/BodyList";
import Header from "../components/Header";
import { baseURL } from "../utils/baseURL";
import { toast } from "react-toastify";

export default function App() {
  const [todosOsAnuncios, setTodosOsAnuncios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchDataTodosAnuncios() {
    try {
      const response = await fetch(`${baseURL}/anuncios/getAllAnuncios`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setTodosOsAnuncios(data);
        setIsLoading(false)
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDataTodosAnuncios();
  }, []);

  return (
    <div>
      {isLoading ? (
        <>
          <p className="">Carregando...</p>
        </>
      ) : (
        <>
          <Header />
          <BodyList text={"Todos os anúncios"} anuncios={todosOsAnuncios}/>
        </>
      )}
    </div>
  );
}
