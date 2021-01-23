import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';
import { MdDeleteForever } from 'react-icons/md';
export default function Home(){
    const nickname = localStorage.getItem('agricultorNickname');

    return(
        <div> 
            <header className="home-header">
                <img src={logo} alt="logo"/>
                <p>Bem vindo, Seu {nickname}!</p>
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
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Verdinho</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Bahia</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Bahia</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Bahia</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Bahia</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                    <div className="card">
                        <button> <MdDeleteForever /> </button> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Bahia</li>

                        <div>
                            <Link className="home-main-button" to="/contact">Negociado</Link>
                        </div>
                    </div>
                   
                </ul>
            </main>

        </div>
    );
}