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
                    <Link className="button" to="/register">Entrar</Link>
            </form>
            
        </div>
    );
}


