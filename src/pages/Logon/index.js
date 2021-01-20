import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../assents/logo.png';

export default function Logon(){

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>            
            <form className="inputs">
                    <input className="input" type="input" placeholder="Whatsapp"/>
                    <input className="input" type="number" placeholder="Senha"/>
                    <Link className="button" to="/user">Entrar</Link>
                    <p> <strong>Não tenho conta:</strong></p>
                    <Link className="link" to="/register">Criar Conta</Link>
            </form>
            
        </div>
    );
}


