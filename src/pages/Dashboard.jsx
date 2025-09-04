import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import FormAddAnuncio from "../components/FormAddAnuncio";
import Header from "../components/Header";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Header pagina={"/dashboard"} setOpen={setOpen} />
      <BodyList setOpenModal={setOpenModal} />
      <Drawer open={open} setOpen={setOpen} tituloDrawer={"Adicionar Anúncio"}>
        <FormAddAnuncio setOpen={setOpen} />
      </Drawer>
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
