import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import logo from '../../assents/logo.png';
import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();
    const agricultorId = localStorage.getItem('agricultorId');

    async function handleLogon(f){
        f.preventDefault();

        
        const response = await api.post('sessions', { id } );

        localStorage.setItem('agricultorId', id);
        localStorage.setItem('agricultorNickname', response.data.nickname)

        console.log(response.data.nickname);
        history.push('/user'); //direciona o usuário para essa rota

    }

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>            
            <form className="inputs" onSubmit={handleLogon}>
                    <input 
                        className="input" 
                        type="input" 
                        placeholder="Insira seu ID aqui"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <div>
                        <text>Anote o seu ID: <strong>{agricultorId}</strong></text>
                    </div>
                    <button className="button" to="/user">Entrar</button>
                    <p> <strong>Não tenho conta:</strong></p>
                    <Link className="link" to="/register">Criar Conta</Link>
            </form>
            
        </div>
    );
}


