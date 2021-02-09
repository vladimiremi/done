import React, { useState, useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import Select from 'react-select';
import './styles.css';
import logo from '../../assents/logo.png';
import api from '../../services/api';
import Modal from '../../components/ActionModal/ActionModal';

export default function NewAdvertisement(){

    const agricultorId = localStorage.getItem('agricultorId');
    const [options, serOptions] =  useState();
    const [type, setType] = useState();
    const [quantity, setQuantity] = useState();

    const history = useHistory();

    const [show, setShow] = useState(false);//modal

    function handleChangeType(e) {
        const type = options.filter(tes =>  tes.value === e.value); //aqui retorna um array na posição zero com o objeto encontrado
        
        setType(type[0].id); //aqui estou acessando esse array na posição zero pegando o id dele

      }
    useEffect(()=>{
        api.get('newadvertisement').then(response => {
            serOptions(response.data.produtos.map(produto => (
                {value: produto.type, label: produto.type, id: produto.id}
                )))
        })
    }
    , [])

    async function handleNewAdvertisement(e) {
        e.preventDefault();
        const dat = {
            quantity,
            produto_id: type,
        };

        try{
            await api.post('newadvertisement', dat, {
                headers: {
                    Authorization: agricultorId,
                }
            })
        } catch(err) {
            alert("Erro ao tentar cadastrar o anúncio. Tente novamente.")
        }

        history.push('/user');
    }

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>
            <h2>Vamos vender esse feijão</h2>            
            <form className="inputs" onSubmit={handleNewAdvertisement}>
                    
                
                    <Select
                        className="input-select"
                        options={options}
                        placeholder="Tipo do Feijão"
                        onChange={handleChangeType}
                    />
                    <input 
                        className="input-quantity" 
                        placeholder="Quantos quilos de Feijão"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                    <button className="button-sale" type="submit">Anunciar</button>

                    <p> <strong>Quero cadastrar um novo tipo de feijão:</strong></p>
                    <button 
                        onClick={()=> setShow(true)} 
                        className="link"
                        >Cadastrar novo tipo</button>
                    {show ? <Modal onClose={ ()=>setShow(false) }>
                       
                            </Modal> : ""}
            </form>
            
        </div>
    );
}


