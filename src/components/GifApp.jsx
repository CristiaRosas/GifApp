import { BuscarGif } from "./BuscarGif"
import { ContenedorGif } from "./ContenedorGif"
import { useGif } from "../hooks/useGif"

//funtional component
export const GifApp = () => {

    const{handleGetGif, arregloGifs} = useGif()
    
    
//props  cosas para mandar al functional component
return (
    <>
        <BuscarGif handleGetGif={handleGetGif} />
        <ContenedorGif arregloGifs={arregloGifs} />
    </>
  )
}