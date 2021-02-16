import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';
import api from '../../services/api';

export default function Home(){

    const [ anuncios, setAnuncios] = useState([]);
    const [ total, setTotal] = useState(0);

    async function handleAnuncios(){
        const sale = await api.get('/');
        setAnuncios(sale.data.sale);
        setTotal(sale.data.sale.length);
    }

    useEffect( () => {
        handleAnuncios()
        
    }, []);

    return(
        <div>
            <header className="home-header">
                <Link className="link-logo" to="/"><img src={logo} alt="logo"/></Link>
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
            <text className="total">Total de anúncios  <strong> {`: ${total}`}</strong></text>
                <ul className="cards">
                    {anuncios.map(anuncio => (
                         <div className="card" key={anuncio.id}>
                         <strong>{anuncio.nickname}</strong> 
                         <li><strong>- {anuncio['SUM(agricultor_produtos.quantity)']}kg</strong></li>
                         <li>- Feijão {anuncio.type}</li>
                         <li>- {anuncio.locality}</li>
                         <div>
                             <a className="home-main-button" href={`https://api.whatsapp.com/send/?phone=55${anuncio.whatsapp}&text=Oi, ${anuncio.nickname}! Vi o seu anúncio no Done de *${anuncio['SUM(agricultor_produtos.quantity)']}kg* do *feijão ${anuncio.type}*. Vamos negociar?`}>Negociar</a>
                         </div>
                     </div>
                    ))}
                   
                </ul>
            </main>
            <footer>
                <text>Feito com muito carinho pelo Vladimir<br/></text>
                <text>Aquele que chamam de <a  href="https://linktr.ee/miimii" className="mimi">MIMI ❣</a> </text>
            </footer>

        </div>
    );
}