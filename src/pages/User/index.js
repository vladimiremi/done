import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';

export default function Home(){
    return(
        <div>
            <header className="home-header">
                <img src={logo} alt="logo"/>
                <p>Bem vindo, Seu João!</p>
                <section className="container">
                    <Link className="home-button" to="/newadvertisement">
                        Anunciar
                    </Link>
                    <Link className="home-button sair" to="/">
                        Sair
                    </Link>
                </section>
            </header>
            <main className="home-main">
                <ul className="cards">
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                   
                   
                </ul>
            </main>

        </div>
    );
}