import React, { useEffect, useState  } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';
import { MdDeleteForever } from 'react-icons/md';
import api from '../../services/api';

export default function Home(){
    const [anuncios, setAnuncios] = useState();


    const agricultorId = localStorage.getItem('agricultorId');
    const nickname = localStorage.getItem('agricultorNickname');
    

    useEffect(() => {
        api.get('user', {
            headers: {
                Authorization: agricultorId,
            }
        }).then(response => {
            setAnuncios(response.data.salesUser);
            console.log(response)
        })
    }, [agricultorId]);

    async function handleDeleteSale(id){
            await api.delete(`user/ ${id}`, {
                headers: {
                    Authorization: agricultorId,
                }
            });

        setAnuncios(anuncios.filter(anuncio => anuncio.id !== id));
    }

    return(
        <div> 
            <header className="home-header">
                <img src={logo} alt="logo"/>
                <p>Bem vindo, {nickname}!</p>
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
                    { anuncios ? anuncios.map(anuncio => (
                        <div className="card" key={anuncio.id}>
                            <button onClick={() => handleDeleteSale(anuncio.id)}> <MdDeleteForever /> </button> 
                            <li><strong>- {anuncio.quantity}kg</strong></li>
                            <li>- Feijão {anuncio.type}</li>

                            <div>
                                <Link className="home-main-button" to="/contact">Negociado</Link>
                            </div>
                        </div>
                    )) : <p>Sem anúncios</p>}
                   
                </ul>
            </main>

        </div>
    );
}