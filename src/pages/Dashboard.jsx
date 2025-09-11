import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import FormAddAnuncio from "../components/FormAddAnuncio";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { baseURL } from "../utils/baseURL";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [todosOsAnuncios, setTodosOsAnuncios] = useState([]);
  const [anuncioSelecionado, setAnuncioSelecionado] = useState(null)
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
      <Header pagina={"/dashboard"} setOpen={setOpen} />
      <BodyList setOpenModal={setOpenModal} anuncios={todosOsAnuncios} setAnuncioSelecionado={setAnuncioSelecionado}/>
      <Drawer open={open} setOpen={setOpen} tituloDrawer={"Adicionar Anúncio"}>
        <FormAddAnuncio setOpen={setOpen} />
      </Drawer>
      <Modal open={openModal} setOpen={setOpenModal} onConfirm={()=> handleDeletarAnuncio(anuncioSelecionado.id)}/>
    </div>
  );
}
