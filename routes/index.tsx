import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";
import ListaFavoritos from "../islands/ListaFavoritos.tsx";

export default function Home() {
  return (
    <div class="index">
      <AgregarAFavoritos/>
      <ListaFavoritos/>
    </div>
  ) 
}
