Vas a crear una funcionalidad en una aplicación con Deno Fresh que permita al usuario **agregar y quitar películas de una lista de favoritos**.

La funcionalidad debe dividirse en componentes interactivos ("**islas**") independientes que comparten el mismo estado utilizando **señales (signals)**.

  

#### **Objetivo**

Crear una pequeña aplicación donde:

*   El usuario pueda **agregar una película** a su lista de favoritos haciendo clic en un botón.
*   El usuario pueda **ver la lista de películas favoritas** en otro componente.
*   Desde la lista, el usuario también pueda **eliminar películas**.
*   Los componentes deben compartir el estado a través de una señal exportada desde un archivo de utilidad.

#### **Estructura recomendada del proyecto**

*   utils/favoritos.ts
*   Define y exporta una señal favoritos de tipo string\[\].
*   islands/AgregarAFavoritos.tsx
*   Componente que recibe el nombre de una película como prop y la agrega a favoritos.
*   islands/ListaFavoritos.tsx
*   Componente que muestra el contenido actual de favoritos y permite eliminar elementos de la lista.
*   routes/index.tsx
*   Página principal donde se usan ambos componentes interactivos.

#### **Sugerencias**

*   Usa @preact/signals para crear la señal.
*   Recuerda que los componentes interactivos deben estar dentro del directorio islands/.
*   Para agregar a la lista puedes hacer:
*   favoritos.value = \[...favoritos.value, nuevaPelicula\]
*   Para eliminar, puedes hacer un .splice() o .filter() sobre favoritos.value.
    

La práctica se realizará en parejas, ambos participantes deberán entregar una release de GitHub directamente ejecutable al ser clonada, sin subdirectorios ni otros cambios por el estilo.

Ambos participantes en la entrega deben indicar a los dos participantes de la práctica. 

La práctica se entregará como un enlace de deno.deploy desplegado y funcional.

No cumplir cualquiera de estas indicaciones significará una evaluación automática con un 0.

  

La practicará se entregará exclusivamente durante las horas de realización de la misma.