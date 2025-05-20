import { FunctionalComponent } from "preact/src/index.d.ts";
import { Favoritos } from "../utils/favoritos.ts";

const ListaFavoritos: FunctionalComponent = () => {


    const dropEntry = (value: string) => {
        console.log(Favoritos.value);
        const idx = Favoritos.value.indexOf(value);
        Favoritos.value.splice(idx, 1);
        console.log(Favoritos.value);
    }



    if(Favoritos.value.length < 1) {
        return (
            <div>
                <h3>Agrega una película a favoritos</h3>
            </div>
        )
    }
    return (
        <div>
            {Favoritos.value?.map(e => {return (<><a>{e}</a><img height="30" src="trash.svg" onClick={() => dropEntry(e)}/></>)})}
            {/* {Favoritos.value?.map(e => <a>{e}</a>)} */}
        </div>
    )
}

export default ListaFavoritos