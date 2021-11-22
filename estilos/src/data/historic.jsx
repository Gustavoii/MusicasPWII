import React, {useState} from 'react'

const contextoInicial = {
    contextoNome: 'User',
    contextoSenha: 123456
}

export const AppContexto = React.createContext(contextoInicial)

const Store = props => {

    const [contexto, setContexto] = useState(contextoInicial)

    function atualizaContexto(Key, value){
        setContexto({
            ...contexto,
            [Key]: value
        })
    }

    return(
        <AppContexto.Provider value={{
            contextoNome: contexto.contextoNome,
            contextoSenha: contexto.contextoSenha,
            setContextoNome: novoNome => atualizaContexto('contextoNome', novoNome),
            setContextoSenha: novaSenha => atualizaContexto('contextoSenha', novaSenha)
        }}>
            {props.children}
        </AppContexto.Provider>
    )
}
export default Store