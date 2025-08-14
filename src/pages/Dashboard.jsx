import BodyList from "../components/BodyList";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div>
      <Header pagina={"/dashboard"} />
      <BodyList />
    </div>
  );
}
