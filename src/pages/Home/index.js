import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';

export default function Home(){
    return(
        <div>
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

        </div>
    );
}