import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/Inicio">Inicio</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Soul">Soul</Link>
                </li>
                <li>
                    <Link to="/Blues">Blues</Link>
                </li>
                <li>
                    <Link to="/Rock">Rock</Link>
                </li>
                <li>
                    <Link to="/HipHop">HipHop</Link>
                </li>
                <li>
                    <Link to="/Gospel">Gospel</Link>
                </li>
                <li>
                    <Link to="/Perfil">Perfil</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu