import { FunctionalComponent } from "preact/src/index.d.ts";
import { Favoritos } from "../utils/favoritos.ts";

const ListaFavoritos: FunctionalComponent = () => {

    const dropEntry = (value: string) => Favoritos.value = Favoritos.value.filter(e => e !== value)

    if(Favoritos.value.length < 1) return <h3>Agrega una película a favoritos</h3>

    return (
        <div class="list">
            {Favoritos.value?.map(e => {
                return (
                <div class="pelicula-container">
                    <p>{e}</p>
                    <img height="30" src="trash.svg" onClick={() => dropEntry(e)}/>
                </div>
                )
            })}
        </div>
    )
}

export default ListaFavoritos