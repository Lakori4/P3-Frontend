import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Favoritos } from "../utils/favoritos.ts";

const AgregarAFavoritos: FunctionalComponent = () => {

    const [pelicula, setPelicula] = useState<string>("")

    return (
        <div>
            <input type="text" onBlur={(e) => setPelicula(e.currentTarget.value)}/>
            <button type="button" onClick={() => Favoritos.value = [...Favoritos.value, pelicula]}>Agregar a favoritos</button>
        </div>
    )
}

export default AgregarAFavoritos