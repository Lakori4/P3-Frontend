import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";
import { Favoritos } from "../utils/favoritos.ts";

const AgregarAFavoritos: FunctionalComponent = () => {

    const [pelicula, setPelicula] = useState<string>("")
    const [repetida, setRepetida] = useState<boolean>(false)
    
    const comprobarPelicula = () => {
        const peliRepetida = Favoritos.value.some(e => e === pelicula)
        setRepetida(peliRepetida)
        if(!peliRepetida) Favoritos.value = [...Favoritos.value, pelicula]
    }

    return (
        <div>
            <input type="text" onBlur={(e) => setPelicula(e.currentTarget.value)}/>
            <button type="button" onClick={() => comprobarPelicula()}>Agregar a favoritos</button>
            {repetida && <h3>Ya has agregado esa película</h3>}
        </div>
    )
}

export default AgregarAFavoritos