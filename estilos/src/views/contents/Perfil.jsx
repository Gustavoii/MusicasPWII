import './Perfil.css'
import React, { useContext } from "react"

import { AppContexto } from '../../data/historic'

const UseContext = props => {
    
    const {contextoNome, setContextoNome} = useContext(AppContexto)
    const {contextoSenha, setContextoSenha} = useContext(AppContexto)

    return (
        <div>
            <div className="titulo">
                <h1>useContext</h1>
                <h2>Aceite um objeto de contexto e retorn o valor atual do contexto</h2>
            </div>

            <div className="conteudo">

                <label className="campo">Acesso encapsulado ao Contexto (Store)</label>
                <p className="mensagem">Nome: {contextoNome}</p>
                <p className="mensagem">Senha: {contextoSenha}</p>
            </div>
        </div>
    )
}

export default UseContext