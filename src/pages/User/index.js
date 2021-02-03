import React, { useEffect, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import logo from '../../assents/logo.png';
import './styles.css';
import { MdDeleteForever } from 'react-icons/md';
import { FcApproval } from 'react-icons/fc';
import api from '../../services/api';
import ModalDelete from '../components/ActionModal/ActionModal';
import ModalSale from '../components/ActionModal/ActionModal';


export default function Home(){
    const [anuncios, setAnuncios] = useState();


    const history = useHistory();
    const agricultorId = localStorage.getItem('agricultorId');
    const nickname = localStorage.getItem('agricultorNickname');
    
    const [modalDelete, setModalDelete] = useState(false);
    const [modalSale, setModalSale] = useState(false);
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
        
        setModalDelete(true)

        setTimeout(()=>{
            setModalDelete(false);
        }, 2100);
        
        
        
    }

    async function handleSold(id) {
        const status = true;

        await api.put(`user/ ${id}`, {status: status}, {
            headers: {
                Authorization: agricultorId,
            }
        });
        setAnuncios(anuncios.filter(anuncio => anuncio.id !== id));

        setModalSale(true);
        setTimeout( ()=>{
            setModalSale(false);
        }, 2500 );

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
                    <Link className="home-button" to="/newadvertisement">
                        Anunciar
                    </Link>
                    {/* "https://api.whatsapp.com/send/?phone=5586981266700&text=Oi vi o seu anúncio no Done" */}
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
                    {
                        modalDelete ? <ModalDelete text={<FcApproval />} text2="Deletado"/> : ""
                        
                    }
                    {
                        modalSale ? <ModalSale text={<FcApproval />} text2="Vendido" /> : ""
                    }

                   
                </ul>
            </main>
            <footer>
                <text> <Link className="sold" to="/sold">VENDIDOS $</Link> </text>
            </footer>

        </div>
    );
}