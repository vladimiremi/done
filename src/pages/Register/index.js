import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assents/logo.png';
import api from '../../services/api';

export default function Register(){

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');






    function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            nickname,
            locality,
            city,
            uf,
            whatsapp
        }

        api.post('agricultor', data);
    }

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>  
                      
            <form className="inputs" onSubmit={handleRegister}>
                    <input 
                        className="input" 
                        type="nome" 
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Seu apelido"
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="bairro" 
                        placeholder="Localidade"
                        value={locality}
                        onChange={e => setLocality(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="cidade" 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="uf" 
                        placeholder="Estado"
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="tel" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <button className="button" type="" to="/">REGISTRAR</button>
            </form>
                 

        </div>
    );
}


