import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import FormAddAnuncio from "../components/FormAddAnuncio";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { baseURL } from "../utils/baseURL";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
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

  async function handleDeletarAnuncio(id) {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await fetch(`${baseURL}/anuncios/deleteMyAnuncio/${id}?userId=${userId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      
      if (response.ok) {
        toast.success("Anúncio deletado com sucesso")
        setOpenModal(false)
        setAnuncioSelecionado(null)
        fetchDataTodosAnuncios()
      } else {
        const data = await response.json()
        toast.error(data.message)
      }
      
    } catch (error) {
      console.error(error)
      toast.error("erro na requisição")
    }
  }
  

  return (
    <div>
      { isLoading ?
      <h1>carregando...</h1> :
      <>
        <Header pagina={"/dashboard"} setOpen={setOpen} />
        <BodyList setOpenModal={setOpenModal} anuncios={todosOsAnuncios} setAnuncioSelecionado={setAnuncioSelecionado}/>
        <Drawer open={open} setOpen={setOpen} tituloDrawer={"Adicionar Anúncio"}>
          <FormAddAnuncio setOpen={setOpen} />
        </Drawer>
        <Modal open={openModal} setOpen={setOpenModal} anuncioSelecionado={anuncioSelecionado} onConfirm={()=> handleDeletarAnuncio(anuncioSelecionado.id)}/>
      </>
      }
    </div>
  );
}
