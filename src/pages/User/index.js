import React, { useEffect, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';
import { MdDeleteForever } from 'react-icons/md';
import api from '../../services/api';

export default function Home(){
    const [anuncios, setAnuncios] = useState();


    const history = useHistory();
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

    async function handleSold(id) {
        const status = true;

        await api.put(`user/ ${id}`, {status: status}, {
            headers: {
                Authorization: agricultorId,
            }
        });
        setAnuncios(anuncios.filter(anuncio => anuncio.id !== id));
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return(
        <div> 
            <header className="home-header">
                <img src={logo} alt="logo"/>
                <p>Bem vindo, {nickname}!</p>
                <section className="container">
                    <a className="home-button" href="https://api.whatsapp.com/send/?phone=5586981266700&text=Oi vi o seu anúncio no Done">
                        Anunciar
                    </a>
                    <button className="home-button sair" onClick={handleLogout}>
                        Sair
                    </button>
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
                                <Link onClick={() => handleSold(anuncio.id)} className="home-main-button">Negociado</Link>
                            </div>
                        </div>
                    )) : <p>Sem anúncios</p>}
                   
                </ul>
            </main>
            <footer>
                <text> <Link  href="https://linktr.ee/miimii" className="sold">VENDIDOS $</Link> </text>
            </footer>

        </div>
    );
}