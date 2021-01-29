import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import logo from '../../assents/logo.png';

// const history = useHistory();

// function handleLogout() {
//     localStorage.clear();
//     history.push('/');
// }
export default function Sold() {
    return(
        <div>

         <header className="home-header">
                <img src={logo} alt="logo"/>
                <section className="container">
                    <a className="home-button" href="https://api.whatsapp.com/send/?phone=5586981266700&text=Oi vi o seu anúncio no Done">
                        Anunciar
                    </a>
                    <button className="home-button sair">
                        Sair
                    </button>
                </section>
            </header>
            <text className="sold-title">Anuncios vendidos</text>
            <main>
                <ul className="sold-itens">
                    <li>
                        Feijão verdinho  40kg
                    </li>
                    <li>
                        Item 2
                    </li>
                    <li>
                        Item 3
                    </li>
                    <li>
                        Item 4
                    </li>
                </ul>
            </main>
            <footer>
                <text> <Link className="sold" to="/user">Anunciados</Link> </text>
            </footer>


        </div>
    )
}