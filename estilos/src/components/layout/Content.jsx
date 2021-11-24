import './Content.css'
import React from "react"
import { Switch, Route} from 'react-router-dom'
import Inicio from '../../views/contents/Inicio.jsx'
import NaoEncontrado from '../../views/contents/NaoEncontrado'
import Login from '../../views/contents/Login'
import Soul from '../../views/contents/Soul'
import Blues from '../../views/contents/Blues'
import Rock from '../../views/contents/Rock'
import HipHop from '../../views/contents/HipHop'
import Gospel from '../../views/contents/Gospel'
import Perfil from '../../views/contents/Perfil'

const Content = props=> (
    <main clasName="Content">
        <Switch>
            <Route exact path="/Inicio">
                <Inicio />
            </Route>
            <Route exact path="/Login">
                <Login />
            </Route>
            <Route exact path="/Perfil">
                <Perfil />
            </Route>
            <Route exact path="/Soul">
                <Soul />
                </Route>
            <Route exact path="/Blues">
                <Blues />   
            </Route>
            <Route exact path="/Rock">
                <Rock />
            </Route>
            <Route exact path="/HipHop">
                <HipHop />
            </Route>
            <Route exact path="/Gospel">
                <Gospel />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content