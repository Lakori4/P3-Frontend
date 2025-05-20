import { FunctionalComponent } from "preact/src/index.d.ts";
import { Favoritos } from "../utils/favoritos.ts";

const ListaFavoritos: FunctionalComponent = () => {
    if(Favoritos.value.length < 1) {
        return (
            <div>
                <h3>Agrega una película a favoritos</h3>
            </div>
        )
    }
    return (
        <div>
            {Favoritos.value?.map(e => <p>{e}</p>)}
        </div>
    )
}

export default ListaFavoritos