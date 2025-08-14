import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header pagina={"/dashboard"} setOpen={setOpen} />
      <BodyList />
      <Drawer open={open} setOpen={setOpen} />
    </div>
  );
}
