import './Perfil.css'
import React, { useContext } from "react"

import { AppContexto } from '../../data/historic'

const UseContext = props => {
    
    const {contextoNome, setContextoNome} = useContext(AppContexto)
    const {contextoSenha, setContextoSenha} = useContext(AppContexto)

    return (
        <div>
            <div className="titulo">
                <h1>Olá</h1>
            </div>

            <div className="conteudo">
                <p className="mensagem">Nome: {contextoNome}</p>
                <p className="mensagem">Senha: {contextoSenha}</p>
            </div>
        </div>
    )
}

export default UseContext