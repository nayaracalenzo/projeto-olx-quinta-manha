import BodyList from "../components/BodyList";
import Drawer from "../components/Drawer";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div>
      <Header pagina={"/dashboard"} />
      <BodyList />
      <Drawer />
    </div>
  );
}
