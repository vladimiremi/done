import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { FcApproval } from 'react-icons/fc';
import { MdDeleteForever } from 'react-icons/md';
import logo from '../../assents/logo.png';
import api from '../../services/api';
import ModalDelete from '../components/ActionModal/ActionModal';

export default function Sold() {

    const [modalDelete, setModalDelete] = useState(false);

    const agricultorId = localStorage.getItem('agricultorId');

    const [anuncios, setAnuncios] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState();

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    useEffect(()=>{
        api.get('sold', {
            headers: {
                Authorization: agricultorId,
            },
        }).then(response => {
            setAnuncios(response.data.soldUser);
            setTotalQuantity(response.data.totalQuantity['SUM(agricultor_produtos.quantity)'])
        })
    }, [agricultorId])
    console.log(anuncios);


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



    return(
        <div>

         <header className="home-header">
                <img src={logo} alt="logo"/>
                <section className="container">
                    <a className="home-button" href="https://api.whatsapp.com/send/?phone=5586981266700&text=Oi vi o seu anúncio no Done">
                        Anunciar
                    </a>
                    <button className="home-button sair" onClick={handleLogout}>
                        Sair
                    </button>
                </section>
            </header>
            <text className="sold-title">Anuncios vendidos</text>
            <main className="sold-table">
                <table>
                    <thead>
                        <tr>
                            {/* <th className="align-left">Data</th> */}
                            <th className="align-left">Tipo</th>
                            <th className="align-right">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           anuncios.map(anuncio => (
                            <tr className="ads" key={anuncio.id}>
                                {/* <td className="align-left">
                                    {anuncio.register_date.slice(0, 9)}
                                </td> */}
                                <td className="align-rigth">
                                    {anuncio.type}
                                </td>
                                <td className="align-main">
                                    {anuncio.quantity} kg
                                </td>
                                <button className="mdDelete" onClick={() => handleDeleteSale(anuncio.id)}><MdDeleteForever /></button>
                            </tr>
                           ))
                       }
                       <tr>
                           <td className="total-x">
                               Total
                           </td>
                           <td className="total-value">
                                {totalQuantity} kg
                           </td>
                       </tr>
                       {
                        modalDelete ? <ModalDelete text={<FcApproval />} text2="Deletado"/> : ""
                        
                        }
                    </tbody>
                </table>
            </main>
            <footer>
                <text> <Link className="sold" to="/user">Anunciados</Link> </text>
            </footer>


        </div>
    )
}