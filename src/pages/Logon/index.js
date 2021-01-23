import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import logo from '../../assents/logo.png';
import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

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
                        placeholder="ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" to="/user">Entrar</button>
                    <p> <strong>Não tenho conta:</strong></p>
                    <Link className="link" to="/register">Criar Conta</Link>
            </form>
            
        </div>
    );
}


