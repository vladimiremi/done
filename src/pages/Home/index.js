import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';

export default function Home(){
    return(
        <div className="home">
            <header className="home-header">
                <img src={logo} alt="logo"/>
                <section className="container">
                    <Link className="home-button" to="/logon">
                        Anunciar
                    </Link>
                    <Link className="home-button" to="/register">
                        Criar conta
                    </Link>
                </section>
            </header>
            <main className="home-main">
                <ul className="cards">
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <strong>Seu Zé</strong> 
                        <li><strong>- 500kg</strong></li>
                        <li>- Feijão Branco</li>
                        <li>- PV Caldeirão</li>

                        <div>
                            <Link className="home-main-button" to="/contacts">Negociar</Link>
                        </div>
                    </div>
                   
                </ul>
            </main>

        </div>
    );
}