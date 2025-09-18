import { createContext, useState } from "react";


const AnuncioContext = createContext();

function AnuncioProvider ({children}) {
const [anuncioSelecionado, setAnuncioSelecionado] = useState(null)

    return (
        <AnuncioContext.Provider value={{anuncioSelecionado, setAnuncioSelecionado}}>
            {children}
        </AnuncioContext.Provider>


    )

}

export {
    AnuncioContext,
    AnuncioProvider
}