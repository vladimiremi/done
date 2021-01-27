import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';
import api from '../../services/api';

export default function Home(){

    const [ anuncios, setAnuncios] = useState([]);

    useEffect(async () => {
        const sale = await api.get('/')
        setAnuncios(sale.data.sale)
    }, []);

    return(
        <div>
            <header className="home-header">
                <img src={logo} alt="logo"/>
                <section className="container">
                    <Link className="home-button" to="/logon">
                        Entrar
                    </Link>
                    <Link className="home-button" to="/register">
                        Criar conta
                    </Link>
                </section>
            </header>
            <main className="home-main">
                <ul className="cards">
                    {anuncios.map(anuncio => (
                         <div className="card" key={anuncio.id}>
                         <strong>{anuncio.nickname}</strong> 
                         <li><strong>- {anuncio['SUM(agricultor_produtos.quantity)']}kg</strong></li>
                         <li>- Feijão {anuncio.type}</li>
                         <li>- {anuncio.locality}</li>
 
                         <div>
                             <a className="home-main-button" href={`Tel:${anuncio.whatsapp}`}>Negociar</a>
                         </div>
                     </div>
                    ))}
                   
                </ul>
            </main>
            <footer>
                <p>Feito com muito carinho por MIMI ❤</p>
            </footer>

        </div>
    );
}